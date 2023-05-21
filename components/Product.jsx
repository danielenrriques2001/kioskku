import Image from 'next/image'
import React from 'react'
import {getCurrencyFormat} from '../helpers/index'
import UseKiosk from '../hooks/UseKiosk'
const Product = ({product}) => {

    const {name, image, price} = product;

    const {handleSetProduct, handleChangeModal} = UseKiosk();

  return (
    <div
        className='border p-3'
    >
            <Image
                src={`/assets/img/${image}.jpg`}
                width={300}
                height={500}
                alt='this is a item'
            />
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                  {getCurrencyFormat(price)}
                </p>

                <button
                  type = 'button'
                  className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                  onClick={() => {
                    handleSetProduct(product)
                    handleChangeModal();
                  }}
                >
                    Add
                </button>
            </div>
    </div>
  )
}

export default Product