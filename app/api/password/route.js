import { NextResponse } from 'next/server'
import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request) {

    if(request.method !== 'POST') return NextResponse.json('Método no Permitido', { status: 405 })

    try {
        const claveMaestra = await request.json();
        const password = await prisma.password.findFirst({
            where: { password: claveMaestra }
        })

        if (!password || password.password !== claveMaestra) {
            return NextResponse.json('Clave Maestra Incorrecta', { status: 401 });
        }
        console.warn('Modo Admin Activado')
        return NextResponse.json({ status: 200 })

    } catch (error) {
        console.error(error);
        return NextResponse.json('Error en el Servidor', { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}