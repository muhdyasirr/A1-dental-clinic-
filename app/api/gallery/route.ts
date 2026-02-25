import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

export async function GET() {
    try {
        await connectToDatabase();
        const gallery = await Gallery.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(gallery);
    } catch (err) {
        console.error('Failed to fetch gallery:', err);
        return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const gallery = await Gallery.create(body);
        return NextResponse.json(gallery, { status: 201 });
    } catch (err) {
        console.error('Failed to create gallery item:', err);
        return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
    }
}
