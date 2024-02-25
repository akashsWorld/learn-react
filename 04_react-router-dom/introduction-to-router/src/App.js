import React from 'react'
import { createBrowserRouter, RouterProvider , createRoutesFromElements , Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>
  },
  {
    path:'/products',
    element: <ProductsPage/>
  }
])

//This is another way of defining routes using Route element.

// const routerDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products' element={<ProductsPage/>} />
//   </Route>
// )

// const router = createBrowserRouter(routerDefinations);



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
