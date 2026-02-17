import { NextResponse } from 'next/server';

export async function GET() {
    const services = [
        {
            _id: '1',
            title: 'Teeth Whitening',
            description: 'Professional whitening for a bright smile.',
            icon: 'wand'
        },
        {
            _id: '2',
            title: 'Dental Implants',
            description: 'Permanent solution for missing teeth.',
            icon: 'tooth'
        },
        {
            _id: '3',
            title: 'Root Canal',
            description: 'Save your natural teeth with effective treatment.',
            icon: 'activity'
        }
    ];
    return NextResponse.json(services);
}
