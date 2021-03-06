import { NextApiRequest, NextApiResponse } from 'next'
import { BookRequest, PrismaClient } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const newBookRequest: BookRequest = req.body
    const prisma = new PrismaClient()

    await prisma.bookRequest.create({data: newBookRequest})

    res.status(200).json({ "message":"Added request", "newBookRequest": newBookRequest })
  }