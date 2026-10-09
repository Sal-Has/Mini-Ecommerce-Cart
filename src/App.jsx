import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import ProductPage from './ProductPage'
import laptop from "./assets/laptop.webp"
import keyboard from "./assets/keyboard.webp"
import monitor  from "./assets/monitor.jpg"
import headphones from "./assets/headphones.webp"
import mouse  from "./assets/mouse.webp"
import Cart from './Cart'

function App() {
  const products = [
      { id: 1, name: "Laptop", price: 850 ,image:laptop},
      { id: 2, name: "Mouse", price: 25,image:mouse},
      { id: 3, name: "Keyboard", price: 45 , image:keyboard},
      { id: 4, name: "Headphones", price: 60 ,image:headphones},
      { id: 5, name: "Monitor", price: 200 ,image:monitor}
  ];
  const [cart,setCart] = useState({})


  const addtoCart = (item) =>{
    console.log("added:", item);
    setCart((prevCart)=>(
    {...prevCart,[item]:(prevCart[item]||0)+1}
  
    ))

  }

  const getTotal = () =>{
    return Object.entries(cart).reduce((sum,[item,quantity])=>{
        const product = products.find((product)=>product.name ===item)
        return sum + product.price *quantity
    }
    ,0)
   

  }
  



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/> 
      <Route path='/products' element={<ProductPage products={products} onAddToCart={addtoCart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} getTotal={getTotal}/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
