import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Dentist from '@/models/Dentist';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectToDatabase();
        const dentist = await Dentist.findById(id);
        if (!dentist) {
            return NextResponse.json({ error: 'Dentist not found' }, { status: 404 });
        }
        return NextResponse.json(dentist);
    } catch (err) {
        return NextResponse.json({ error: 'Failed to fetch dentist' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectToDatabase();
        const body = await request.json();
        const dentist = await Dentist.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!dentist) {
            return NextResponse.json({ error: 'Dentist not found' }, { status: 404 });
        }
        return NextResponse.json(dentist);
    } catch (err) {
        return NextResponse.json({ error: 'Failed to update dentist' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectToDatabase();
        const dentist = await Dentist.findByIdAndDelete(id);
        if (!dentist) {
            return NextResponse.json({ error: 'Dentist not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Dentist deleted successfully' });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to delete dentist' }, { status: 500 });
    }
}
