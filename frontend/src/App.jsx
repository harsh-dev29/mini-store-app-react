
import React, { useEffect } from 'react';
import MainRoutes from './routes/mainRoutes';
import Nav from './components/Nav';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';
import { asyncLoadProducts } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch()

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