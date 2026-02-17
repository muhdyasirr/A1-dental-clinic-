import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Gallery from '@/models/Gallery';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectToDatabase();
        const gallery = await Gallery.findByIdAndDelete(id);
        if (!gallery) {
            return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Gallery item deleted successfully' });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
    }
}
