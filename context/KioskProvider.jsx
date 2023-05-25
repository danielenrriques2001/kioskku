import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

    
const KioskContext = createContext();



const KioskProvider = ({children}) => {

    const [categories, setCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState(1);

    const [product, setProduct] = useState({});

    const [modal, setModal] = useState(false);

    const [order, setOrder] = useState([]);

    const [total, SetTotal] = useState();

    const [name, SetName] = useState('');

    const router = useRouter();





    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
       setCurrentCategory(categories[0])
    }, [categories])

    useEffect(() => {
        const newTotal = order.reduce((total, item) => (item.price * item.Amount) + total, 0);
        SetTotal(newTotal)
     }, [order])
    

    const getCategories = async () => {
        const {data} = await axios('/api/categories');
        setCategories(data)
    }

    const handleClickCurrentCategory = (id) => {
       const category = categories.filter(e => {
        return e.id === id;
       })
      setCurrentCategory(category[0])
    }
    
    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal =() => {
        setModal(!modal)
    }

    const handleAddOrder = ({categoryId,...purchase}) => {

        if(order.some( productState => productState.id === purchase.id )) {
            const updated_order = order.map(item => item.id === purchase.id ? purchase : item )

            setOrder(updated_order)

           toast.info('Order has been updated!')
           
        } else {
            setOrder([...order, purchase])
            toast.success('Order has been created!')
        }
        
        setModal(false)
      
       
        
    }

    const handleEditAmount = (id) => {

        const selectedProduct = order.filter(item => item.id === id);

        setProduct(selectedProduct[0])
        
        setModal(!modal)
    }

    const handleDeleteProduct = (id) => {
        const updatedProductList = order.filter(item => item.id !== id);

        setOrder(updatedProductList)
    }


    const handleOrderSubmit = async e => {
        e.preventDefault();
    
        try {
         const date = Date.now().toString();
         await axios.post('/api/orders', {order, name, total, date});

        //reset the app
        
                setCurrentCategory(categories[0])
                setOrder([]);
                SetName('')
                SetTotal(0)

                toast.success('ORDER ALREADY SENT.....')

                setTimeout(() => {
                    router.push('/')
                }, 3000);

        } catch (error) {
                console.log(error)
        }
    
      }


    return(
        <KioskContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCurrentCategory,
                handleSetProduct,
                modal,
                handleChangeModal,
                product,
                handleAddOrder,
                order,
                handleEditAmount,
                handleDeleteProduct,
                handleOrderSubmit,
                total,
                name,
                SetName

            }}
        >
            {children}
        </KioskContext.Provider>
    )
}
export {
    KioskProvider
}
export default KioskContext