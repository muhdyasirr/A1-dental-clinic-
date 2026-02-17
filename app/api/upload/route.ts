import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file received.' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: 'a1-clinic' },
                (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                }
            ).end(buffer);
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Upload failed:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
