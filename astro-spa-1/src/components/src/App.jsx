import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { StaticRouter } from "react-router-dom/server"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import About from "./Components/About"
import Products from "./Components/Products"
import ProductComponent from "./Components/ProductComponent"
import Nope from "./Components/Nope"
import Cart from "./Components/Cart"
import { CartProvider } from "./utils/store"
import "./App.css"

function App({ path }) {
  return (
    <>
      <Providers path={path}>
        <main className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<ProductComponent />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Nope />} />
            </Route>
          </Routes>
        </main>
      </Providers>
    </>
  )
}

export default App

function Providers({ children, path }) {
  if (typeof document === "undefined") {
    return (
      <StaticRouter path={path}>
        <CartProvider>{children}</CartProvider>
      </StaticRouter>
    )
  }
  return (
    <Router>
      <CartProvider>{children}</CartProvider>
    </Router>
  )
}
