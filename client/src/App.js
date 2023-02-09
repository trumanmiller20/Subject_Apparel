import "./App.css"
import axios from "axios"
import Header from "./components/Header"
import Home from "./components/Home"
import Order from "./components/Order"
import OrderDetails from "./components/OrderDetails"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

const App = () => {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState([])
  const [newOrder, setNewOrder] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  })

  const addOrder = (e) => {
    e.preventDefault()
    const currentOrders = orders
    const createdOrder = {
      ...newOrder,
    }
    currentOrders.push(createdOrder)
    setOrders(currentOrders)
    setNewOrder({ firstname: "", lastname: "", address: "", phone: "" })
  }

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.id]: e.target.value })
  }

  const addToCart = (product) => {
    let newCart = cart
    newCart.push(product)
    setCart(newCart)
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:3001/products")
      setProducts(res.data.products)
    }
    getProducts()
  }, [])

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await axios.get("http://localhost:3001/orders")
      setOrders(res.data.orders)
    }
    getAllOrders()
  }, [])

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route
            path="/order"
            element={
              <Order
                handleChange={handleChange}
                addOrder={addOrder}
                newOrder={newOrder}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
