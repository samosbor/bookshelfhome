import { NextApiRequest, NextApiResponse } from "next";
import { BookReview } from "@prisma/client";
import prisma from "../_base";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let bookReviews: BookReview[] = await prisma.bookReview.findMany({
    orderBy: { id: "desc" },
    take: 5,
  });

  res.status(200).json(bookReviews);
};
