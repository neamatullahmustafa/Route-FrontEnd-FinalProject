import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { authContext } from './Context/AuthContext';

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Products", element: <Products /> },
      { path: "Cart", element: <Cart /> },
      { path: "Categories", element: <Categories /> },
      { path: "Brands", element: <Brands /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  let { setToken } = useContext(authContext);
useEffect(() => {
  const token = localStorage.getItem("userToken");
  if (token !== null) {
    setToken(token);
  }
}, []);

  return <RouterProvider router={routes}></RouterProvider>
}

export default App;