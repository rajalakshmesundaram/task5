import { useContext } from "react";
import { mycontext } from "../App";
import './style/Card.css'
import { Display } from "./Display";


export const Card = () => {
    const [data, setData] = useContext(mycontext);
    
    
    const handleIncrease=(id,quantity)=>{
      setData((preval)=>{
        return preval.map((item)=>{
          if(item.id == id){
            return{...item,quantity:(item.quantity+1 || quantity+1)}
          }
          return item;
        })
      })
    }
    const handleDecrease=(id,quantity)=>{
      setData((preval)=>{
        return preval.map((item)=>{
          if(item.id == id && (item.quantity > 0 || quantity > 0) ){
            return{...item,quantity:(item.quantity-1 || quantity-1)}
          }
          return item;
        })
      })
    }
    const handleRemove = (id) => {
   setData((preval) => {
      return preval.filter((item) => item.id !== id);
   });
};


    return (
   
       <div className="container mt-5">
 
    {data.map((item,index)=>(
    <div className="card mb-3"  key={index}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {item.thumbnail} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price:{item.price}</p>
        <p className="card-text">Category:{item.category}</p>
        <p className="card-text">Brand:{item.brand}</p>
        <button onClick={()=>{handleIncrease(item.id,item.quantity || 0)}}>+</button>Quantity:{item.quantity}
        <button onClick={()=>{handleDecrease(item.id , item.quantity || 0)}}>-</button><br/><br/>
        <button className="btn btn-danger" onClick={()=>{handleRemove (item.id)}}>Remove Cart</button>
      </div>
    </div>
  </div>
</div>
))}

       </div>
     
       
    )
}
