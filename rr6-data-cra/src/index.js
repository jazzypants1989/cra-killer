import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout, { loader as productsLoader } from "./Components/Layout"
import ProductComponent, {
  loader as productLoader,
} from "./Components/ProductComponent"
import About from "./Components/About"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Nope from "./Components/Nope"
import { CartProvider } from "./utils/store"
import Products from "./Components/Products"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    error: <Nope />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductComponent />,
        loader: productLoader,
      },
      {
        path: "*",
        element: <Nope />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
