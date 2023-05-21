import Image from 'next/image'
import React from 'react'
import UseKiosk from '../hooks/UseKiosk'
import { useRouter } from 'next/router'



const Category = ({name, icon, id}) => {

  const SendMeTo = useRouter();

  const {currentCategory, handleClickCurrentCategory} = UseKiosk();

  return (
    <div
      className={`${currentCategory?.id === id ? 'bg-amber-500' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400 cursor-pointer`}
      onClick={() => {
        handleClickCurrentCategory(id)
        if(SendMeTo.pathname !== '/') {SendMeTo.push('/')}
       
      }}
    >
      <Image
        src={`/assets/img/icono_${icon}.svg`}
        alt='this is a category item Icon'
        width={70}
        height={70}
      />

      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        
      >
        {name}
      </button>

    </div>
  )
}

export default Category