import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export async function loader() {
  const res = await fetch(`/db.json`)
  const data = await res.json()
  return data
}

export async function productLoader({ params }) {
  const res = await fetch(`/${params}.json`)
  const data = await res.json()
  return data
}

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
