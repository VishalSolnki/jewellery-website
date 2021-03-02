import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, weight, rating,price }) {
  const [{basket},dispatch] = useStateValue();

  console.log("this is baskeet",basket);
  const addToBasket = ()=>{
      //dispatch the item into Dl
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          image:image,
          weight:weight,
          rating:rating,
          price:weight*5500,
        },

      });
    };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__weight">
          
          <strong>{weight}</strong>
          <small>gms</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
      <div className="product_price">
        <small>₹</small>
        <strong>{weight*5500}</strong>
      </div>
    </div>
  );
}

export default Product;
