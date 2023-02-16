import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const EditOrder = ({ orders }) => {
  const { id, index } = useParams()
  let navigate = useNavigate()

  const [order, setOrder] = useState({})
  const [edit, setEdit] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    products: [],
  })

  const getOrderById = async () => {
    const res = await axios.get(`http://localhost:3001/order/${id}`)
    setEdit(res.data.order)
  }

  useEffect(() => {
    getOrderById(id)
  }, [id])

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/order/${id}`, edit)
    navigate("/success")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="firstname">First Name:</label>
        <br />
        <input
          type="text"
          id="firstname"
          onChange={handleChange}
          value={edit.firstname}
        />
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastname"
          onChange={handleChange}
          value={edit.lastname}
        />
      </div>
      <div className="form-input">
        <label htmlFor="address">Address:</label>
        <br />
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={edit.address}
        />
      </div>
      <div className="form-input">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="text"
          id="phone"
          onChange={handleChange}
          value={edit.phone}
        />
      </div>
      <button type="submit" className="button" id="submit-change">
        Submit Changes
      </button>
    </form>
  )
}

export default EditOrder
