const db = require("../db")
const { Product } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const products = [
    {
      name: "Black Standard Tee",
      price: 30,
      image: "https://i.imgur.com/PjKF831.jpg",
      quantity: 25,
    },
    {
      name: "Cream Deluxe Tee",
      price: 35,
      image: "https://i.imgur.com/wwCIzh6.jpg",
      quantity: 25,
    },
    {
      name: "White Standard Tee",
      price: 30,
      image: "https://i.imgur.com/STQ8oRA.jpg",
      quantity: 25,
    },
    {
      name: "Black Neon Standard Tee",
      price: 30,
      image: "https://i.imgur.com/6eOnx9c.jpg",
      quantity: 25,
    },
    {
      name: "Navy Retro Tee",
      price: 30,
      image: "https://i.imgur.com/ywwmbPm.jpg",
      quantity: 25,
    },
    {
      name: "Black Deluxe Tee",
      price: 35,
      image: "https://i.imgur.com/zBuYh04.jpg",
      quantity: 25,
    },
    {
      name: "Women's Light Blue '91 Tee",
      price: 35,
      image: "https://i.imgur.com/PjzkvJb.jpg",
      quantity: 25,
    },
    {
      name: "Grey NSE Tank",
      price: 25,
      image: "https://i.imgur.com/DxoMUiv.jpg",
      quantity: 25,
    },
    {
      name: "White MTN '91 Tank",
      price: 25,
      image: "https://i.imgur.com/yZypgiv.jpg",
      quantity: 25,
    },
    {
      name: "Monochromatic '91 Tee",
      price: 35,
      image: "https://i.imgur.com/SFdmagT.jpg",
      quantity: 25,
    },
    {
      name: "White NSE Tee",
      price: 30,
      image: "https://i.imgur.com/yJmxCak.jpg",
      quantity: 25,
    },
    {
      name: "Cream Retro Tee",
      price: 35,
      image: "https://i.imgur.com/0Elx1oo.jpg",
      quantity: 25,
    },
  ]

  await Product.insertMany(products)
  console.log("Created products!")
}

const run = async () => {
  await main()
  db.close()
}

run()
