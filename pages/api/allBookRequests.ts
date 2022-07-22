import { NextApiRequest, NextApiResponse } from 'next'
import { BookRequest, PrismaClient } from '@prisma/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient()

    let allBookRequests: BookRequest[] = await prisma.bookRequest.findMany()

    res.status(200).json(allBookRequests)
  }