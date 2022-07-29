import { NextApiRequest, NextApiResponse } from "next";
import { BookRequest } from "@prisma/client";
import prisma from "../_base";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let allBookRequests: BookRequest[] = await prisma.bookRequest.findMany({
    where: { anonymous: false },
    orderBy: { id: "desc" },
    take: 7,
  });

  res.status(200).json(allBookRequests);
};
