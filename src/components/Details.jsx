import React, { useContext, useState } from "react";
import { Newcontext } from "../App";
import { useParams } from "react-router-dom";
import "../styles/Details.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
function Details() {
  const { product, setProduct,cartproduct,setCartproduct } = useContext(Newcontext);
  const { id } = useParams('');
  const userid = parseInt(id);
  const singleProduct = product.find((item) => item.id === userid);
  let [images,setImages]=useState(singleProduct.thumbnail)
  const addTocart=(data)=>{
    if (!addCart) {
      setCartproduct([...cartproduct,data])
      setAddcart(true)
    }else{
      alert("Item is already in the cart");
    }
  }
  const [addCart,setAddcart]=useState(false)

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={singleProduct.images[3]} onClick={()=>setImages(singleProduct.images[3])} alt="" />
          <img src={singleProduct.images[2]}  onClick={()=>setImages(singleProduct.images[2])} alt="" />
          <img src={singleProduct.images[1]}  onClick={()=>setImages(singleProduct.images[1])} alt="" />
          <img src={singleProduct.images[0]}  onClick={()=>setImages(singleProduct.images[0])} alt="" />
        </div>
        <div className="product-display-main-img">
          <img src={images} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <p>{singleProduct.brand}</p>
        <h1>{singleProduct.title}</h1>
        <div className="product-display-right-star">
        <FaStar className="star-icon" />
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
        <FaRegStar className="star-icon"/>
        <p>| ({singleProduct.stock+78} Ratings)</p>
        </div>
        <div className="product-display-right-stock">Stock:  {singleProduct.stock}</div>
        <div className="product-display-right-prices">
            <div className="product-display-right-price-old"> ₹{singleProduct.price+946}</div>
            <div className="product-display-right-price-new">₹{singleProduct.price+500} <span>({Math.floor(70-singleProduct.discountPercentage)}% OFF)</span> </div>
        </div>
        <div className="product-display-right-description">
            {singleProduct.description}
        </div>
        <div className="product-category">
        Category:{singleProduct.category}
        </div>
        
        <button onClick={()=>addTocart(singleProduct)}>{addCart?"ITEM ADDED":"ADD TO CART"}</button>

      </div>
    </div>
  );
}

export default Details;
