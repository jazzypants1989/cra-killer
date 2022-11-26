import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Products from "./Components/Products"
import ProductComponent from "./Components/ProductComponent"
import Footer from "./Components/Footer"
import Cart from "./Components/Cart"
import { CartProvider } from "./utils/store"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <main className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/cart" component={Cart} />
              <Route path="/products" component={Products} />
              <Route path="/product/:id">
                <ProductComponent />
              </Route>
              <Router path={"*"}>
                <Nope />
              </Router>
            </Switch>
            <Footer />
          </main>
        </CartProvider>
      </Router>
    </>
  )
}

function Nope() {
  const location = useLocation()
  return (
    <h2>Huh? You're at {location.pathname}, but you really shouldn't be.</h2>
  )
}

export default App
