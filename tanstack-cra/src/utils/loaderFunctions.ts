export async function fetchProducts() {
  const res = await fetch("/db.json")
  const data = await res.json()
  return data.products
}

export async function fetchProduct(id: any) {
  let productID = id.params.id
  let res = await fetch(`/${productID}.json`)
  let data = await res.json()
  return data
}
