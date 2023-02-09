import { useState, useEffect } from "react"

const Order = () => {
  const initalState = {
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  }
  const [formState, setFormState] = useState(initalState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <form className="order-form">
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        onChange={handleChange}
        value={formState.firstname}
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        onChange={handleChange}
        value={formState.firstname}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        onChange={handleChange}
        value={formState.firstname}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        onChange={handleChange}
        value={formState.firstname}
      />
      <button type="submit">Place Order</button>
    </form>
  )
}

export default Order
