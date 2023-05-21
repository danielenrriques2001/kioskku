
import Layout from '../layout/layout';
import ResumeProduct from '../components/ResumeProduct';
import UseKiosk from '../hooks/UseKiosk';
const resume = () => {

  const {order} = UseKiosk();

  return (
    <Layout page = 'Resume'>
        <h1 className='text-4xl font-black'>Resume</h1>
        <p className='text-2xl my-10 '>Check your order!</p>

        {
          order.length === 0 ? (
            // eslint-disable-next-line react/no-unescaped-entities
            <p>There's no items in your order...</p>
          ) : (
            order.map(product => (
            <ResumeProduct
              key={product.id}
              product={product}
            />
          ))
        )}
    </Layout>
  )
}

export default resume