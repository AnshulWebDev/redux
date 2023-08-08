import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = () => {
    const dispatch=useDispatch()
  const cartItems = useSelector((state) => state.cart);
  const handelremove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div className="cartWrapper">
      {cartItems.map((item) => (
        <div className="cartCard">
        <img src={item.image} alt="img" />
        <h5>{item.title}</h5>
        <h5>{item.price}</h5>
        <button className="btn" onClick={()=>handelremove(item.id)}>Remove</button>
      </div>
      ))}
    </div>
  );
};

export default Cart;
