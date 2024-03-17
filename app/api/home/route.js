import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {

	const existingEntries = await prisma.home.findMany();
	const isTableEmpty = existingEntries.length === 0;

	const { titulo, descripcion } = await request.json();

	if (isTableEmpty) {
		const newHome = await prisma.home.create({
			data: {
				titulo: titulo,
				descripcion: descripcion,
			},
		});
		return NextResponse.json(newHome);
	} else {
		const updatedHome = await prisma.home.updateMany({
			where: { id: { gt: 0 } },
			data: {
				titulo: titulo,
				descripcion: descripcion,
			},
		});
		return NextResponse.json(updatedHome);
	}
  
}

export async function GET() {
	
	const home = await prisma.home.findFirst();
	return NextResponse.json(home);
}
