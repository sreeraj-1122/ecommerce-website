import React, { useContext, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";
import { Newcontext } from "../App";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
function Header(props) {
  const { product, setProduct } = useContext(Newcontext);
  const [value, setValue] = useState("mens-shirts");
  const [menu, setMenu] = useState(false);
  return (
    <>
    
      {/* <section className="header"> */}


      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="logo">Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home"><Link to="/ecommerce-website" >
                Shop
              </Link></Nav.Link>
            
            <NavDropdown title="Men" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-shirts")}
                >
                  shirts
                </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-shoes")}
                >
                  shoes
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-watches")}
                >
                  watches{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("sunglasses")}
                >
                  sunglasses
                </Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Women" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to={`/product/${value}`} onClick={() => setValue("tops")}>
                  tops
                </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-dresses")}
                >
                  dresses
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-bags")}
                >
                  bags
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue('"womens-watches')}
                >
                  watches{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-jewellery")}
                >
                  jewellery
                </Link>
              </NavDropdown.Item>
             
            </NavDropdown>

            <NavDropdown title="Electronics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link
                  to={`/product/${value}`}
                  onClick={() => setValue("smartphones")}
                >
                  smartphones
                </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("laptops")}
                >
                  laptops
                </Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Home & Living" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link
                  to={`/product/${value}`}
                  onClick={() => setValue("furniture")}
                >
                  furniture
                </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("home-decoration")}
                >
                  home-decorations
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("groceries")}
                >
                  groceries
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("lighting")}
                >
                  lighting
                </Link>
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Beauty" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link
                  to={`/product/${value}`}
                  onClick={() => setValue("fragrances")}
                >
                  fragrances
                </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("skincare")}
                >
                  skincare
                </Link>
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <Link to="/cart">
          <div className="cart-header">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt=""
            />
            <div className="nav-cart-count">{props.count}</div>
          </div>
        </Link>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>





        {/* <div className="logo">Shopify</div>
        <div className="header-link">
          <ul className={menu?"mobile-ui":"normal-ul"}>
            <li className="dropdown">
              <Link to="/ecommerce-website" className="dropbtn">
                Shop
              </Link>
            </li>

            <li className="dropdown">
              <Link className="dropbtn">Men</Link>

              <div className="dropdown-content">
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-shirts")}
                >
                  shirts
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-shoes")}
                >
                  shoes
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("mens-watches")}
                >
                  watches{" "}
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("sunglasses")}
                >
                  sunglasses
                </Link>
              </div>
            </li>

            <li className="dropdown">
              <Link className="dropbtn">women</Link>

              <div className="dropdown-content">
                <Link to={`/product/${value}`} onClick={() => setValue("tops")}>
                  tops
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-dresses")}
                >
                  dresses
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-bags")}
                >
                  bags
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue('"womens-watches')}
                >
                  watches{" "}
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("womens-jewellery")}
                >
                  jewellery
                </Link>
              </div>
            </li>
            <li className="dropdown">
              <Link className="dropbtn">Electronics</Link>

              <div className="dropdown-content">
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("smartphones")}
                >
                  smartphones
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("laptops")}
                >
                  laptops
                </Link>
              </div>
            </li>
            <li className="dropdown">
              <Link className="dropbtn">Home & Living</Link>

              <div className="dropdown-content">
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("furniture")}
                >
                  furniture
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("home-decoration")}
                >
                  home-decorations
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("groceries")}
                >
                  groceries
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("lighting")}
                >
                  lighting
                </Link>
              </div>
            </li>
            <li className="dropdown">
              <Link className="dropbtn">Beauty</Link>

              <div className="dropdown-content">
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("fragrances")}
                >
                  fragrances
                </Link>
                <Link
                  to={`/product/${value}`}
                  onClick={() => setValue("skincare")}
                >
                  skincare
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="search-bar">
          <img src={searchIcon} className="search" alt="" />
          <input type="text" placeholder="Search items" />
        </div> */}
        {/* <Link to="/cart">
          <div className="cart-header">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt=""
            />
            <div className="nav-cart-count">{props.count}</div>
          </div>
        </Link>
        <GiHamburgerMenu  className="menu-icon" onClick={()=>setMenu(!menu)} /> */} 

      {/* </section> */}
    </>
  );
}

export default Header;
