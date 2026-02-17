import { NextResponse } from 'next/server';

export async function GET() {
    // Return available slots or similar data
    const slots = [
        { id: '1', time: '09:00 AM', available: true },
        { id: '2', time: '10:00 AM', available: false },
        { id: '3', time: '11:00 AM', available: true }
    ];
    return NextResponse.json(slots);
}

export async function POST(req: Request) {
    return NextResponse.json({ message: 'Booking received' });
}
