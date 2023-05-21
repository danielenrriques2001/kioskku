import React from 'react'
import useSWR from 'swr'
import AdminLayout from '../layout/adminlayout'
import Order from '../components/Order'
const Admin = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100}) 


  
      if (error) return <div>failed to load</div>
      if (isLoading) return <div>loading...</div>


  return (
    <AdminLayout page={'Administration'}>

    <h1
        className='text-4xl font-black'
      >Administration Panel</h1>

      <p>
        Administrate your orders!
      </p>

      {
        data && data.length ? (
          data.map(e => (
            <Order 
              key={e.id}
              order = {e}
              />
          )) 
        ): <p className='text-2xl text-center font-medium bg-indigo-700 m-5 rounded-full p-3 text-white'>{`There's no pending order`}</p>
      }

    </AdminLayout>
  )
}

export default Admin