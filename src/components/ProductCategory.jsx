import React, { useContext, useState } from 'react'
import { Newcontext } from '../App';
import { Link, useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../styles/Categorystyle.css";
import Ads2 from './shop/Ads2';
import Ads from './shop/Ads';
function ProductCategory() {
  const { product, setProduct } = useContext(Newcontext);
    const {category}=useParams();
    
   
    const currentData=product.filter((item)=>item.category===category)
    console.log(currentData);
  return (
    <>
        <section className="category-section ">
        <h1 className="main-head">{category}</h1>
        <div className="underline"></div>
        <div className="category-body"> 
          {currentData.map((item,i) => (
            <>
            <Link to={`/details/${item.id}`} className='nav-link'>
            <Card
                style={{ width: "18rem" }}
                className="card shadow p-1 mb-5 bg-body rounded"
                key={i}
              >
                <div className="img-section">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={item.thumbnail}
                  style={{ height: "20rem" }}
                />
                </div>
                <Card.Body >
                  <Card.Text className="rating-section">
                    
                    <span className="rate">{item.rating}</span>{" "}
                    <span>
                      <FaStar className=" star text-primary" />
                    </span>
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
        </div>

      </section>
    </>
  )
}

export default ProductCategory