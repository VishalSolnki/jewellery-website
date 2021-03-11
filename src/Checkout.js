
import React,{Component} from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
//import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
//import Slider from "react-slick";  
//import './slickdemo.css';  

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // var settings = {  
  //   dots: true,  
  //   infinite: true,  
  //   speed: 500,  
  //   centerMode: true,  
  //   slidesToShow: 1,  
  //   slidesToScroll: 1  
  //   }; 

  return (
    //<Slider {...settings}>
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="homeimage3.png"
          alt=""
        />
       
       
      

        <div>
          <h3 style={{color:'white'}}>Hello,{user ? user?.email.split("@")[0]:"Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              weight={item.weight}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
     
    
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
    //</Slider> 
  );
}


export default Checkout;