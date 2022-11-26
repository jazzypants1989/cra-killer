import { useMatch, Link } from "@tanstack/react-router"
import { useContext } from "react"
import { productRoute } from "../index"
import CartContext from "../utils/store.js"

export default function ProductComponent() {
  const { loaderData } = useMatch(productRoute.id)
  let product = loaderData
  const { dispatch } = useContext(CartContext)

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <div className="product">
      {product && (
        <>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button
            onClick={addToCart}
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
              border: "none",
              cursor: "pointer",
              margin: "10px 0",
            }}
          >
            Add to Cart
          </button>
          <Link
            to="/products"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Go Back
          </Link>
        </>
      )}
    </div>
  )
}
