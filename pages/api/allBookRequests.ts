import { NextApiRequest, NextApiResponse } from "next";
import { BookRequest, PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  let allBookRequests: BookRequest[] = await prisma.bookRequest.findMany({
    where: { anonymous: false },
    orderBy: { id: "desc" },
    take: 5,
  });

  res.status(200).json(allBookRequests);
};
