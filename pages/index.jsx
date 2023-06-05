import Layout from '../layout/layout'
import Product from '../components/Product'
import UseKiosk from '../hooks/UseKiosk'
const Home = () => {

  const {currentCategory} = UseKiosk();

  return (
   <Layout page = {currentCategory?.name}>
      <h1
        className='text-4xl font-black'
      >{currentCategory?.name}</h1>

      <p>
        Choose and Costumize your order!
      </p>

          <div className='grid gap-4 grid-cols2 xl:grid-cols-3 2xl:grid-cols-4'> 

          
            {
              currentCategory?.products?.map(e => (
                  <Product
                    key={e.id}
                    product = {e}
                  />
              ))
            }

         </div>
   </Layout>

  )
}
export default Home;

