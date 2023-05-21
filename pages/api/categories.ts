// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
import products from '../../prisma/data/products';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {


  const categories = await prisma.category.findMany({
    include: {
      products: true,
    }
  
  });
  res.status(200).json(categories)
}
