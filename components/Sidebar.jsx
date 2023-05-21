import Image from 'next/image'
import React, { Fragment } from 'react'

import useKiosk from '../hooks/UseKiosk'
import Category from '../components/Category'

const Sidebar = () => {

  const {categories} = useKiosk();

  return (
    <Fragment>
        <Image
            width={300}
            height={300}
            src={'/assets/img/logo.svg'}
            alt={`logo's image`}
        />

        <nav className='mt-10'>
          {
            categories?.map(e => (
              <Category
                key={e.id}
                name = {e.name}
                icon = {e.icon}
                id = {e.id}

              />

              
             ))
          }
        </nav>
    </Fragment>
  )
}

export default Sidebar