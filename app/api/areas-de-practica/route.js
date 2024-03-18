import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST (request) {

    const existingEntries = await prisma.areas.findMany();
    const isEmpty = existingEntries.length === 0;

    const { introduccion, derechoFamilia, derechoSucesorio, derechoCivil } = await request.json();

    if(isEmpty) {
        const newAreas = await prisma.areas.create({
            data: {
                introduccion: introduccion,
                derechoFamilia: derechoFamilia,
                derechoSucesorio: derechoSucesorio,
                derechoCivil: derechoCivil
            }
        });
        return NextResponse.json(newAreas);
    } else {
        const updatedAreas = await prisma.areas.updateMany({
            where: { id: { gt: 0 } },
            data: {
                introduccion: introduccion,
                derechoFamilia: derechoFamilia,
                derechoSucesorio: derechoSucesorio,
                derechoCivil: derechoCivil
            }
        });
        return NextResponse.json(updatedAreas);
    }
} 

export async function GET() {
    const areas = await prisma.areas.findFirst();
    return NextResponse.json(areas);
}