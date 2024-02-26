import { useContext } from "react"
import { mycontext } from "../App"
import './style/Display.css'

export const Display = () => {
    const[data,setData]=useContext(mycontext)
     const totalPrice=data.reduce((total,data)=>total + data.price *(data.quantity || 1),0)
    const totalQuantity=data.reduce((total,data)=> total + (data.quantity || 1),0)
  return (
    <div>
        <div className="container">
        <div className="card text-center">
  
  <div className="card-body">
    <h5 className="card-title">TotalPrice={totalPrice}</h5>
    <p className="card-text">TotalQuantity={totalQuantity}</p>
   
  </div>
  
</div>
    </div>
    </div>
  )
}
