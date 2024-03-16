import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST (request){
    const data = await request.json();
    const { password, newPassword, confirmNewPassword } = data;

    const passwordDB = await prisma.password.findFirst({
        where: {
            id: 1
        }
    });

    if(passwordDB.password === password) {
        if(newPassword === confirmNewPassword) {
            await prisma.password.update ({
                where: {
                    id: 1
                },
                data: {
                    password: newPassword
                }
            })
            return NextResponse.json({ success: 'Contraseña modificada con éxito' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Las contraseñas no coinciden' }, { status: 400 });
        }
    } else {
        return NextResponse.json({ error: 'La contraseña actual no es correcta' }, { status: 400 })
    }
}
