import { useContext } from "react"
import { useNavigate, useLoaderData } from "react-router-dom"
import CartContext from "../utils/store"

export async function loader({ params }) {
  let data = await fetch(`/${params.id}.json`)
    .then((res) => res.json())
    .then((data) => data)

  return data
}

export default function ProductComponent() {
  const loaderData = useLoaderData()
  const product = loaderData
  const navigate = useNavigate()
  const { dispatch } = useContext(CartContext)

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
    navigate("/cart")
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
          <button
            onClick={() => navigate(-1)}
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
          </button>
        </>
      )}
    </div>
  )
}
