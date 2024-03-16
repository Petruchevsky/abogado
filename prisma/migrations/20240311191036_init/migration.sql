-- CreateTable
CREATE TABLE "Home" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "newPassword" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trayectoria" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Trayectoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Areas" (
    "id" SERIAL NOT NULL,
    "introduccion" TEXT NOT NULL,
    "derechoFamilia" TEXT NOT NULL,
    "derechoSucesorio" TEXT NOT NULL,

    CONSTRAINT "Areas_pkey" PRIMARY KEY ("id")
);
