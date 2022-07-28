import { NextApiRequest, NextApiResponse } from "next";
import { BookRequest } from "@prisma/client";
import prisma from "./_base";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const newBookRequest: BookRequest = req.body;
  await prisma.bookRequest.create({ data: newBookRequest });

  const gotifyPostData = {
    title: "New Osborne BookRequest",
    message: JSON.stringify(newBookRequest, null, '\t'),
    priority: 5,
  };

  axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "http://gotify.jk/message?token=AI.UXEEHBii5.DJ",
    data: gotifyPostData,
  })

  res
    .status(200)
    .json({ message: "Added request", newBookRequest: newBookRequest });
};
