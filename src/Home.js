import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="homeimage.png"
          alt=""
        />
       

        <div className="home__row">
          <Product
            id="1"
            
            weight={11.96}
            price={11.96*5500}
            rating={5}
            image="1.png"
            title="Platinum Wedding Ring with Diamond(950 Platinum,0.04ct)-Platinum Band For Him. "
          />
          <Product
            id="2"
            
            weight={20.0}
            rating={4}
            image="ms.png"
            title="Gold Mangalsutra Necklace-22kt yellow gold."
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            
            weight={40.99}
            rating={3}
            image="necklaceset.png"
            title="Gold Dulhan Set-22kt yellow gold"
          />
          <Product
            id="4"
            
            weight={10}
            rating={5}
            image="cp.png"
            title="Gold Chain Pendant for kids and women-22kt Gold"
          />
          <Product
            id="5"
            
            weight={15}
            rating={4}
            image="earings.png"
            title="Gold Earings-18kt gold,Laila cutout Gold Earing For Women. "
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
           
            weight={80}
            rating={4}
            image="necklace.png"
            title="An Ancient Adroitness Gold Necklace"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
