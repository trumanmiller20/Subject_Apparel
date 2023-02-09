import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import Order from "./components/Order"
import OrderDetails from "./components/OrderDetails"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
