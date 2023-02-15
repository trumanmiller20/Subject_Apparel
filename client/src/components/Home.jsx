import Product from "./Product"

const Home = ({ products, addToCart }) => {
  return (
    <div className="home">
      <div className="display-products">
        {products.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            addToCart={addToCart}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
