
import React, { useEffect } from 'react';
import Nav from './components/Nav';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadProducts } from './store/actions/productActions';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.userReducer)
  const { products } = useSelector((state) => state.productReducer)

  useEffect(() => {
    !users && dispatch(asyncCurrentUser())
  }, [users])
  useEffect(() => {
    products.length == 0 && dispatch(asyncCurrentUser())
  }, [products
    
  ])

  useEffect(() => {
    dispatch(asyncLoadProducts())
    dispatch(asyncCurrentUser())
  }, [])


  return (
    <>
      <div className='text-white bg-black h-screen w-full'>
        <Nav />
        <MainRoutes />
      </div>
    </>
  )
}

export default App