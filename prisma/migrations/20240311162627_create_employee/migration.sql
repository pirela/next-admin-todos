-- CreateTable
CREATE TABLE "Employee" (
    "id" UUID NOT NULL,
    "name" VARCHAR,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
