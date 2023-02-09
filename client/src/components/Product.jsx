const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={props.image} />
      </div>
      <div className="info">
        <h3>
          {props.name} ${props.price}
        </h3>
        <button className="add-order">Add to Order</button>
      </div>
    </div>
  )
}

export default Product
