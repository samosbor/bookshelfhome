import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const gotifyPostData = {
    title: "Audiobook Account Request",
    message: JSON.stringify(req.body, null, "\t"),
    priority: 5,
  };

  axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "http://gotify.jk/message?token=AI.UXEEHBii5.DJ",
    data: gotifyPostData,
  });

  res
    .status(200)
    .json({ message: "Sam Notified" });
};
