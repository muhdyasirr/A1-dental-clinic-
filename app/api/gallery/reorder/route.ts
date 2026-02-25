import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

// PUT /api/gallery/reorder  — body: { ids: string[] }  (ordered list)
export async function PUT(req: Request) {
    try {
        await connectToDatabase();
        const { ids } = await req.json();

        if (!Array.isArray(ids)) {
            return NextResponse.json({ error: 'ids must be an array' }, { status: 400 });
        }

        // Bulk-update each image's `order` field based on their position in the array
        await Promise.all(
            ids.map((id: string, index: number) =>
                Gallery.findByIdAndUpdate(id, { order: index })
            )
        );

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Failed to reorder gallery:', err);
        return NextResponse.json({ error: 'Failed to reorder' }, { status: 500 });
    }
}
