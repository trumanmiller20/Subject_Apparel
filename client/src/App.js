import "./App.css"
import axios from "axios"
import Header from "./components/Header"
import Home from "./components/Home"
import Order from "./components/Order"
import EditOrder from "./components/EditOrder"
import OrderSuccess from "./components/OrderSuccess"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const App = () => {
  let navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState([])
  const [newOrder, setNewOrder] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    products: [],
  })

  const addOrder = async (e) => {
    e.preventDefault()
    let response = await axios.post("http://localhost:3001/order", newOrder)
    let currentOrders = orders
    currentOrders.push(response.data.order)
    setOrders(currentOrders)
    setNewOrder({
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      products: [],
    })
    setCart([])
    navigate("/success")
  }

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.id]: e.target.value })
  }

  const addToCart = (product) => {
    let newCart = cart
    newCart.push(product)
    setCart(newCart)
    let productArr = newOrder.products
    productArr.push(product._id)
    setNewOrder({ ...newOrder, products: productArr })
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:3001/products")
      setProducts(res.data.products)
    }
    getProducts()
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
                setNewOrder={setNewOrder}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/edit" element={<EditOrder />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
