import React, { useContext, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";
import { Newcontext } from "../App";
function Header(props) {
  const { product, setProduct } = useContext(Newcontext);
  const [value,setValue]=useState('mens-shirts')

  return (
    <>
      <section className="header">
        <div className="logo">Shopify</div>
        <div className="header-link">
          
          <ul>
            <li className="dropdown"><Link to='/ecommerce-website' className="dropbtn">Shop</Link></li>
           
            <li className="dropdown">
              <Link className="dropbtn">Men</Link>

              <div className="dropdown-content">
                <Link to={`/product/${value}`} onClick={()=>setValue('mens-shirts')} >shirts</Link>
                <Link to={`/product/${value}`} onClick={()=>setValue('mens-shoes')}>shoes</Link>
                <Link to={`/product/${value}`} onClick={()=>setValue('mens-watches')}>watches </Link>
                <Link to={`/product/${value}`} onClick={()=>setValue('sunglasses')}>sunglasses</Link>
              </div>
            </li>

            <li className="dropdown">
            <Link className="dropbtn">women</Link>

                    <div className="dropdown-content">
                                <Link to={`/product/${value}`} onClick={()=>setValue('tops')}>tops</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('womens-dresses')}>dresses</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('womens-bags')}>bags</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('"womens-watches')}>watches </Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('womens-jewellery')}>jewellery</Link>
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Electronics</Link>

                    <div className="dropdown-content">
                                <Link to={`/product/${value}`} onClick={()=>setValue('smartphones')}>smartphones</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('laptops')}>laptops</Link>
                                
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Home & Living</Link>

                    <div className="dropdown-content">
                                <Link to={`/product/${value}`} onClick={()=>setValue('furniture')}>furniture</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('home-decoration')}>home-decorations</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('groceries')}>groceries</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('lighting')}>lighting</Link>
                                
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Beauty</Link>

                    <div className="dropdown-content">
                                <Link to={`/product/${value}`} onClick={()=>setValue('fragrances')}>fragrances</Link>
                                <Link to={`/product/${value}`} onClick={()=>setValue('skincare')}>skincare</Link>
                                
                        </div>
                    </li>
          </ul>
        </div>
        <div className="search-bar">
          <img src={searchIcon} className="search" alt="" />
          <input type="text" placeholder="Search items" />
        </div>
        <Link to='/cart'>
        <div className="cart-header" >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt=""
            
          />
          <div className="nav-cart-count">{props.count}</div>
        </div>
        </Link>
      </section>
    </>
  );
}

export default Header;
