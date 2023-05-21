// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
import products from '../../prisma/data/products';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {


  if(req.method === 'GET') {
    const orders = await prisma.order.findMany({
      where: {
        status: false
      },
    })

    res.status(200).json(orders)
 }

    
    if(req.method === 'POST') {
       const order = await prisma.order.create({
        data: {
            name: req.body.name,
            total: req.body.total,
            purchase: req.body.order,
            date: req.body.date
        },
       })

       res.status(200).json(order)
    }

  
}
