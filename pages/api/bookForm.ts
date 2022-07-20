import { NextApiRequest, NextApiResponse } from 'next'
import { BookRequest, PrismaClient } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body: BookRequest = req.body
    const prisma = new PrismaClient()

    await prisma.bookRequest.create({data: body})

    let allBookRequests: BookRequest[] = await prisma.bookRequest.findMany()

    res.status(200).json({ allBookRequests: allBookRequests })
  }



