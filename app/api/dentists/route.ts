import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Dentist from '@/models/Dentist';

export async function GET() {
    try {
        await connectToDatabase();
        const dentists = await Dentist.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(dentists);
    } catch (err) {
        console.error('Failed to fetch dentists:', err);
        return NextResponse.json({ error: 'Failed to fetch dentists' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const dentist = await Dentist.create(body);
        return NextResponse.json(dentist, { status: 201 });
    } catch (err) {
        console.error('Failed to create dentist:', err);
        return NextResponse.json({ error: 'Failed to create dentist' }, { status: 500 });
    }
}
