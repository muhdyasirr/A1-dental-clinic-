import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGallery extends Document {
    imageUrl: string;
    title?: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const GallerySchema: Schema = new Schema(
    {
        imageUrl: { type: String, required: true },
        title: { type: String, required: false },
        order: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
);

// Check if the model is already defined to prevent overwriting during hot reloads
const Gallery: Model<IGallery> =
    mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);

export default Gallery;
