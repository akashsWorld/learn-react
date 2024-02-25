import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import RootPage from "./pages/RootPage";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";


// To is how to disign the layouts of the pages and using router change a particular component of a page. 
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // In the children route define all the components respected to their Urls, 
    // and use of Outlet change the component of that place.
    errorElement: <ErrorPage/>,
    children: [
      {
        // If the path not starts with / then it will append with the parent path.
        // So now "" this becomes /
        index:true, //This index=true is same as <path:''> implies this is the default route for current element.
        element: <HomePage />,
      },
      {
        // "products" This becomes "/products". Because it appends with the parent url.
        // This called Realtive path.
        path: "products",
        element: <ProductsPage />,
      },
      {
        path:'products/:productId',
        element: <ProductDetails/>
      }
    ]
  },
]);

//This is another way of defining routes using Route element.

// const routerDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products' element={<ProductsPage/>} />
//   </Route>
// )

// const router = createBrowserRouter(routerDefinations);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
