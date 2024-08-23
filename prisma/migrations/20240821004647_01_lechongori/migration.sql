/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productSlug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productDescription` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSlug` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productTitle` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_slug_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "inStock",
DROP COLUMN "price",
DROP COLUMN "slug",
DROP COLUMN "tags",
DROP COLUMN "title",
ADD COLUMN     "productDescription" TEXT NOT NULL,
ADD COLUMN     "productPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "productSlug" TEXT NOT NULL,
ADD COLUMN     "productTitle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_productSlug_key" ON "Product"("productSlug");
