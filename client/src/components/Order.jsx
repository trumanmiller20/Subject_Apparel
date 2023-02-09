import { useState, useEffect } from "react"
import axios from "axios"

const Order = ({
  cart,
  handleChange,
  addOrder,
  newOrder,
  setCart,
  setNewOrder,
}) => {
  const handleSubmit = (e) => {
    addOrder(e)
  }

  const deleteFromCart = (e) => {
    const newCart = cart.filter((item) => item._id !== e.target.id)
    setCart(newCart)
    let delProduct = newOrder.products
    delProduct = delProduct.filter((item) => item === e.target.id)
    setNewOrder({ ...newOrder, products: delProduct })
  }

  return (
    <div className="order-form">
      <div className="display-products">
        {cart.map((product) => (
          <div className="product-card">
            <div className="product-img">
              <img src={product.image} />
            </div>
            <div className="info">
              <h3>
                {product.name} ${product.price}
              </h3>
            </div>
            <button
              className="button"
              id={product._id}
              onClick={(e) => deleteFromCart(e)}
            >
              Delete Item
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input
            type="text"
            id="firstname"
            onChange={handleChange}
            value={newOrder.firstname}
          />
        </div>
        <div className="form-input">
          <label htmlFor="lastname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lastname"
            onChange={handleChange}
            value={newOrder.lastname}
          />
        </div>
        <div className="form-input">
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            onChange={handleChange}
            value={newOrder.address}
          />
        </div>
        <div className="form-input">
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="text"
            id="phone"
            onChange={handleChange}
            value={newOrder.phone}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default Order
