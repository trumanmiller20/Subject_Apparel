import { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"
import Order from "./Order"

const Home = () => {
  const [placeOrder, setPlaceOrder] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:3001/products")
      setProducts(res.data.products)
    }
    getProducts()
  }, [])

  return (
    <div className="home">
      <div className="display-products">
        {products?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
          />
        ))}
      </div>
      <div className="order-form">
        <Order />
      </div>
    </div>
  )
}

export default Home
