import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../../styles/Categorystyle.css";
import { Newcontext } from "../../App";
import { Link } from "react-router-dom";

function Newcollections() {
    const { product, setProduct } = useContext(Newcontext);
    const newCollections = product.filter(
      (data) =>
        data.category === "smartphones" ||
        data.category === "fragrances" ||
        data.category === "home-decoration"||
        data.category === "automotive"||
        data.category === "motorcycle"
    );
  return (
    <>
      <section className="category-section ">
        <h1 className="main-head">Top Deals</h1>
        <div className="underline"></div>
        <div className="category-body">
          {newCollections.map((item) => (
            <>
            <Link to={`/details/${item.id}`} className="nav-link">
            <Card
                style={{ width: "18rem" }}
                className="card shadow p-1 mb-5 bg-body rounded"
                key={item.id}
              >
                <div className="img-section">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={item.thumbnail}
                  style={{ height: "20rem" ,objectFit:'fill'}}
                />
                </div>
                <Card.Body >
                  <Card.Text className="rating-section">
                    
                    <span className="rate">{Math.round(item.rating*10)/10}</span>{" "}
                    <span>
                      <FaStar className=" star text-primary" />
                    </span>
                    <span className="rate mx-2"> | ({item.stock+78})</span>

                  </Card.Text>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  {/* <Card.Text>
                   {item.description}
                  </Card.Text> */}
                  <Card.Text className="price-section ">
                    <span className="price">Rs: {item.price+500} </span>{" "}
                    <span className="original-price">Rs: {item.price+946}</span>
                    <span className="offer">({Math.floor(70-item.discountPercentage)} % OFF)</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
              
            </>
          ))}

            <div className="p-2 " style={{marginBottom:'70px'}}>
            <img style={{width: '300px',marginBottom:'20px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/0bfa366c8ff03748.jpg?q=20" alt="" />     
             <img style={{width: '300px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/843f21fee0983555.jpg?q=20" alt="" /> 
                 
            </div>
            <div className="p-2" style={{marginBottom:'70px'}}>
            <img style={{width: '300px',marginBottom:'20px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/2bd99f6562bf885f.jpg?q=20" alt="" />     
             <img style={{width: '300px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/00bd6cf4e114899d.jpg?q=20" alt="" /> 
                 
            </div>
            <div className="p-2" style={{marginBottom:'70px'}}>
            <img style={{width: '300px',marginBottom:'20px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/788e38837eef4f21.jpg?q=20" alt="" />     
             <img style={{width: '300px'}} src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/1827e18a0c532367.jpg?q=20" alt="" /> 
                 
            </div>
                
        </div>

      </section>   
    </>
  )
}

export default Newcollections