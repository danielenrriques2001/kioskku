// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
import products from '../../../prisma/data/products';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    
    if(req.method === 'POST') {

        const {id: OrderId} = req.query;

       const order = await prisma.order.update({
            where: {
                id: parseInt(OrderId)
            },
            data: {
                status: true,
            }
       })
       res.status(200).json({message: 'Order Updated!', data: order})
    }

  
}
