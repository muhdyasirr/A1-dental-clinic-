import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
    try {
        await connectToDatabase();
        const users = await User.find({}, "-password").sort({ createdAt: -1 });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name: name || "Admin",
            email,
            password: hashedPassword,
        });

        return NextResponse.json({
            message: "User created successfully",
            user: { id: newUser._id, email: newUser.email, name: newUser.name }
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}
