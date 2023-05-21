import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UseKiosk from '../hooks/UseKiosk'
import {getCurrencyFormat} from '../helpers/index'

const ModalProduct = () => {

  
  const {product, handleChangeModal, handleAddOrder, order} = UseKiosk();
  const [Amount, setAmount] = useState(1);
  const [Edit, setEdit] = useState(false);


  useEffect(() => {

      if(order.some((e) => e.id === product?.id)) {

        const editedProduct = order.find(item => item.id === product.id)

        setEdit(true)
        setAmount(editedProduct.Amount)
      } 
  }, [order, product ])
  

  const changeAmount = (type) => {

    switch (type) {
      case 'decrement':
            setAmount(Amount - 1)
        break;

        case 'increment':
          setAmount(Amount + 1)
      break;
    
      default:
          setAmount(1)
        break;
    }
  }



  return (
    <div className='md:flex gap-10'>
      <div className='md:1/3'>
          <Image
           width={300}
           height={400}
           src={`/assets/img/${product?.image}.jpg`}
           alt='imagen producto'
          />
      </div>
      <div className='md:2/3'>
        <div>
          
        </div>
          <h1 className='text-3xl font-bold mt-5'>{product?.name}</h1>
          <p className='mt-5 font-black text-5xl text-amber-500'>{getCurrencyFormat(product?.price)}</p>

          <div className='flex justify-start items gap-8 align-middle py-5'>
            <button 
              onClick={() => {
                if(Amount <= 1) return;
                changeAmount('decrement')}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

            </button>
            
            <p className='text-3xl'>{Amount}</p>
            <button
              onClick={() => {changeAmount('increment')}}
             
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            </button>
        </div>

        <button
          className=' bg-indigo-600 hover:bg-indigo-800 px-5 py-2 text-white font-semibold uppercase rounded'
          type='button'
          onClick={() => {handleAddOrder({...product, Amount})}}
        >
          {Edit ? 'Save Changes' : 'Order now!' }
        </button>
        </div>


        <div>
          <button
            type='button'
            className='w-full bg-amber-500 p-5 text-2xl text-white font-bold transition ease-out delay-75  hover:bg-amber-600 hover:text-black'
            onClick={handleChangeModal}
          >
              X
          </button>
        </div>
    </div>
  )
}

export default ModalProduct