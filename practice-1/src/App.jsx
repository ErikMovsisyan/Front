import { useState } from "react"
import './App.css'
import ProductList from "./components/ProductList"
import Basket from "./components/Basket"

export default function App() {
  const [products,setProducts] = useState([
    {id: 101, title: 'Psychology', price: 28, photo:"https://images.booksense.com/images/568/458/9781465458568.jpg"},
    {id: 102, title: 'Philosophy', price: 42.4, photo:"https://prodimage.images-bn.com/pimages/9780593847046_p0_v19_s600x595.jpg"},
    {id: 103, title: 'Biology', price: 12.8, photo:"https://m.media-amazon.com/images/I/81Sd2o0GF2L._AC_UF1000,1000_QL80_.jpg"},
    {id: 104, title: 'History', price: 17, photo:"https://m.media-amazon.com/images/I/81tndPuXhSL._AC_UF1000,1000_QL80_.jpg"},
    {id: 105, title: 'Math', price: 88, photo:"https://m.media-amazon.com/images/I/911G2nW1exL._AC_UF350,350_QL50_.jpg"},
  ])

  const [basket, setBasket] = useState([])

  const moveToCart = product => {
    setBasket(prev => {
      const found = prev.find(item => item.id === product.id)
      if (found) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = id => {
    setBasket(prev =>
      prev.map(product =>
        product.id !== id
          ? product
          : { ...product, quantity: product.quantity + 1 }
      )
    )
  }

  const eraseQuantity = id => {
    setBasket(prev =>
      prev
        .map(product =>
          product.id !== id
            ? product
            : { ...product, quantity: product.quantity - 1 }
        )
        .filter(product => product.quantity > 0)
    )
  }

  const removeFromBasket = id => {
    setBasket(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div>
      <h2>Shop</h2>

      <ProductList 
        products={products} 
        moveToCart={moveToCart} 
      />

      <Basket 
        basket={basket}
        increaseQuantity={increaseQuantity}
        eraseQuantity={eraseQuantity}
        removeFromBasket={removeFromBasket}
      />
    </div>
  )
}
