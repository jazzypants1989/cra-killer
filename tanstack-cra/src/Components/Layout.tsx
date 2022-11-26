import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "@tanstack/react-router"
import { CartProvider } from "../utils/store"

function Layout() {
  return (
    <>
      <CartProvider>
        <div className="container">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default Layout
