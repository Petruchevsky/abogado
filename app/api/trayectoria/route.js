import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST (request) {

    const existingEntries = await prisma.trayectoria.findMany();
    const isEmpty = existingEntries.length === 0;

    const { titulo, descripcion } = await request.json();

    if(isEmpty) {
        const newTrayectoria = await prisma.trayectoria.create({
            data: {
                titulo: titulo,
                descripcion: descripcion,
            }
        });
        return NextResponse.json(newTrayectoria);
    } else {
        const updatedTrayectoria = await prisma.trayectoria.updateMany({
            where: { id: { gt: 0 } },
            data: {
                titulo: titulo,
                descripcion: descripcion,
            }
        });
        return NextResponse.json(updatedTrayectoria);
    }
} 

export async function GET() {
    const trayectoria = await prisma.trayectoria.findFirst();
    return NextResponse.json(trayectoria);
}