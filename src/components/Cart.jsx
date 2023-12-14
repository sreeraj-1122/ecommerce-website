import React, { useContext, useState } from "react";
import "../styles/Cart.css";
import { RiCloseFill } from "react-icons/ri";
import { Newcontext } from "../App";
function Cart() {
  const { cartproduct, setCartproduct } = useContext(Newcontext);
  let [cart, setCart] = useState(
    cartproduct.map((item) => ({ ...item, quantity: 0 }))
  );

  const decQty = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCart(updateCart);
  };
  const incQty = (id) => {
    const updateCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updateCart);
  };

  const handleDelete = (id) => {
   
   const deleteItem= cart.splice(id, 1);
    const updatedCart=cart.filter(item=>item.id!==id)
    setCart(updatedCart)
    setCartproduct(updatedCart)

  };
  return (
    <div className="cart">
      <div className="cart-items">
        <p className="ms-3">Products</p>
        <p>Title</p>
        <p className="ms-4">Price</p>
        <p className="me-4">Quantity</p>
        <p className="ms-2">Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        cart.length===0?( <div className="empty-cart">Cart is empty</div>):
       ( cart.map((item) => (
          <>
            <div className="cartitems-format cart-items" key={item.id}>
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
              <p className="ms-2">{item.price + 500}</p>
              <div className="btns">
                <button className="qty-btn" onClick={() => decQty(item.id)}>
                  -
                </button>
                <div className="qty">{item.quantity>0?item.quantity:1}</div>
                <button className="qty-btn" onClick={() => incQty(item.id)}>
                  +
                </button>
              </div>
              <p>{item.quantity>0?(item.price + 500) * item.quantity:item.price + 500}</p>
              <p>
                <RiCloseFill className="close-icon" onClick={()=>handleDelete(item.id)} />
              </p>
            </div>
            <hr />
          </>
        ))
        
        )
      }
      
    </div>
  );
}

export default Cart;
