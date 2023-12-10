import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../../styles/Categorystyle.css";
import { Newcontext } from "../../App";
function Mens() {
  const { product, setProduct } = useContext(Newcontext);
  const mensCategory = product.filter(
    (data) =>
      data.category === "mens-shirts" ||
      data.category === "mens-shoes" ||
      data.category === "mens-watches"
  );
  // console.log(mensCategory);

  return (
    <>
      <section className="category-section ">
        <h1 className="main-head">Popular in Mens</h1>
        <div className="underline"></div>
        <div className="category-body">
          {mensCategory.map((item) => (
            <>
              <Card
                style={{ width: "18rem" }}
                className="card shadow p-1 mb-5 bg-body rounded"
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
                    <span className="price">Rs: {item.price} </span>{" "}
                    <span className="original-price">Rs: {item.price+246}</span>
                    <span className="offer">({Math.floor(100-item.discountPercentage)} % OFF)</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Mens;
