import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../layout/layout'
import UseKiosk from '../hooks/UseKiosk';
import { getCurrencyFormat } from '../helpers';

const Total = () => {

  const {order, handleOrderSubmit, total, name, SetName} = UseKiosk();


  const CheckOrdersAmount = useCallback(  () => {
    return order.length === 0 || name === '' || name.length < 3;
  }, [order, name])

  useEffect(() => {
    CheckOrdersAmount();
  }, [order, CheckOrdersAmount])



  
    return (
        <Layout page = 'total'>
             <h1 className='text-4xl font-black'>Total and Confirm</h1>


             <form 
                className='mt-10'
                onSubmit={handleOrderSubmit}
                >
                <div>
                  <label 
                    htmlFor='name'
                    className='block uppercase text-slate-800 font-bold text-xl'>name</label>
                  <input 
                    id='name'
                    type='text'
                    className='bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md'
                    onInput={(e) => {SetName(e.target.value)}}
                    ></input>
                    
                </div>

                <div className='mt-10'>
                  <p className='text-2xl'>Pending to pay : {''} 
                    <span className='font-bold'>{getCurrencyFormat(Number(total))}</span>
                  </p>
                </div>

                <div>
                  <input
                    type='submit'
                    value={'Confirm your order'}
                    className={`${CheckOrdersAmount() ? 'bg-indigo-100' : 'bg-indigo-700'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white mt-6 text-center`}
                    disabled = {CheckOrdersAmount()}
                  >
                  </input>
                </div>
             </form>

        </Layout>
      )
}

export default Total