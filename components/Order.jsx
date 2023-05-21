import Image from 'next/image';
import React from 'react'
import {getCurrencyFormat} from '../helpers/index';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = ({order}) => {
  
  const {id, name, total, purchase} = order;

  const CompleteOrder = async () => {
    try {
      const {data} = await axios.post(`/api/orders/${id}`);

     toast.success('Order is ready!')

    } catch (error) {
        toast.error(`Upps... Something wrong has happened`)
    }
  }

  return (
    <div className='border p-10 space-y-5'>
            <h3
        className='text-2xl font-black'
      >Order: {id}</h3>

      <h4>
        Client: {name}
      </h4>

      <div>
        {
          purchase.map(p => (

            
            <div 
            key={p.id}
            className='py-3 flex border-b last-of-type: border-0 items-center'
            
            >
              <div className='w-32'>
                <Image
                  width={400}
                  height={500}
                  src={`/assets/img/${p.image}.jpg`}
                  alt={`this is a purchase for ${p.name}`}
                />
              </div>

              <div className='p-5 space-y-2 '>
                <h4 className='text-xl font-bold text-amber-500'>{p.name}</h4>
                <p className='text-lg font-bold'>
                  Cantidad: {p.Amount}
                </p>
              </div>

            </div>
          ))
        }

      </div>
      <div className='md:flex md:items-center md:justify-between my-10 '>
          <p className=' mt-5 font-black text-4xl text-amber-500 '>
            Total a Pagar: {getCurrencyFormat(total)}
          </p>

          <button
            className='bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 px-5 py-3 rounded-3xl uppercase font-semibold'
            type='button'
            onClick={CompleteOrder}
          >
            Complete Order
          </button>
     

      </div>


    </div>
  )
}

export default Order