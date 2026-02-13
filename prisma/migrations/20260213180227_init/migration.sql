-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "bread_shop";

-- CreateTable
CREATE TABLE "bread_shop"."position" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bread_shop"."customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sum_cost" INTEGER NOT NULL,
    "sale_precent" INTEGER NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bread_shop"."purchase" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "position_id" INTEGER NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bread_shop"."purchase" ADD CONSTRAINT "purchase_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "bread_shop"."customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bread_shop"."purchase" ADD CONSTRAINT "purchase_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "bread_shop"."position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
