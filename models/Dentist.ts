import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDentist extends Document {
    name: string;
    specialization: string;
    experience: string;
    description: string;
    imageUrl: string;
    contact?: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const DentistSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        specialization: { type: String, required: true },
        experience: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        contact: { type: String, required: false },
        order: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
);

// Check if the model is already defined to prevent overwriting during hot reloads
const Dentist: Model<IDentist> =
    mongoose.models.Dentist || mongoose.model<IDentist>('Dentist', DentistSchema);

export default Dentist;
