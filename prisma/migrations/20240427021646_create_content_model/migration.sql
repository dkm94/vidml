-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "page" "PageType" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "content" TEXT,
    "image" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);
