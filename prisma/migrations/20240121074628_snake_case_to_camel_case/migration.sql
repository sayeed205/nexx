/*
  Warnings:

  - You are about to drop the column `access_token` on the `ODToken` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `ODToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accessToken]` on the table `ODToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refreshToken]` on the table `ODToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accessToken` to the `ODToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `ODToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenType` to the `ODToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ODToken_access_token_key";

-- DropIndex
DROP INDEX "ODToken_refresh_token_key";

-- AlterTable
ALTER TABLE "ODToken" DROP COLUMN "access_token",
DROP COLUMN "refresh_token",
ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "refreshToken" TEXT NOT NULL,
ADD COLUMN     "tokenType" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ODToken_accessToken_key" ON "ODToken"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "ODToken_refreshToken_key" ON "ODToken"("refreshToken");
