import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // AUTO-SEED: If no users exist, create the default admin
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash("Vyshakh94", salt);
            await User.create({
                email: "A1dentalclinickalamaseery@gmail.com",
                password: hashedPassword,
                name: "Admin"
            });
            console.log("Auto-seeded admin user");
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Return success (In a real app, you'd return a JWT or set a session cookie here)
        // For this simple implementation, we'll rely on the frontend state as requested previously,
        // or we could set a cookie. Given the current AuthContext uses localStorage, we'll return success 
        // and let the client handle the state for now, but validating against DB is the key step requested.
        return NextResponse.json({
            success: true,
            user: { id: user._id, email: user.email, name: user.name }
        });

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
