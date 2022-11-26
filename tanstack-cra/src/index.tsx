import React from "react"
import ReactDOM from "react-dom/client"
import "./App.css"
import {
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router"
import Home from "./Components/Home"
import About from "./Components/About"
import Layout from "./Components/Layout"
import Products from "./Components/Products"
import ProductComponent from "./Components/ProductComponent"
import { fetchProduct, fetchProducts } from "./utils/loaderFunctions"
import Cart from "./Components/Cart"

const rootRoute = createRouteConfig()

const layoutRoute = rootRoute.createRoute({
  id: "layout",
  component: Layout,
})

const indexRoute = layoutRoute.createRoute({
  path: "/",
  component: Home,
})

const aboutRoute = layoutRoute.createRoute({
  path: "/about",
  component: About,
})

export const productsRoute = layoutRoute.createRoute({
  path: "/products",
  component: Products,
  loader: fetchProducts,
})

export const productRoute = layoutRoute.createRoute({
  path: "/product/$id",
  component: ProductComponent,
  loader: fetchProduct,
})

const cartRoute = layoutRoute.createRoute({
  path: "/cart",
  component: Cart,
})

const routeConfig = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  productRoute,
  cartRoute,
])

const router = createReactRouter({ routeConfig })

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
