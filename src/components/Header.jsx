import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";
function Header() {
  return (
    <>
      <section className="header">
        <div className="logo">Shopify</div>
        <div className="header-link">
          {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className="dropdown">
                <a href="#" className="dropbtn">Products</a>
                <div className="dropdown-content">
                    <a href="#">Engineering</a>
                    <a href="#">Telecom</a>
                    <a href="#">Energy</a>
                    <a href="#">Finance</a>
                    <a href="#">Consultancy</a>
                </div>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul> */}
          <ul>
            <li className="dropdown">
              <Link className="dropbtn">Men</Link>
              
              <div className="dropdown-content">
                <Link>shirts</Link>
                <Link>shoes</Link>
                <Link>watches </Link>
                <Link>sunglasses</Link>
              </div>
            </li>

            <li className="dropdown">
            <Link className="dropbtn">women</Link>

                    <div className="dropdown-content">
                                <Link>tops</Link>
                                <Link>dresses</Link>
                                <Link>bags</Link>
                                <Link>watches </Link>
                                <Link>jewellery</Link>
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Electronics</Link>

                    <div className="dropdown-content">
                                <Link>smartphones</Link>
                                <Link>laptops</Link>
                                
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Home & Living</Link>

                    <div className="dropdown-content">
                                <Link>furniture</Link>
                                <Link>home-decorations</Link>
                                <Link>groceries</Link>
                                <Link>lighting</Link>
                                
                        </div>
                    </li>
                    <li className="dropdown">
              <Link className="dropbtn">Beauty</Link>

                    <div className="dropdown-content">
                                <Link>fragrances</Link>
                                <Link>skincare</Link>
                                
                        </div>
                    </li>
          </ul>
        </div>
        <div className="search-bar">
          <img src={searchIcon} className="search" alt="" />
          <input type="text" placeholder="Search items" />
        </div>
        <div className="cart-header">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt=""
          />
          <p>Cart</p>
        </div>
      </section>
    </>
  );
}

export default Header;
