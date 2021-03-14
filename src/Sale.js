import React, { Component } from 'react'
import "./Sale.css"
import Product from "./Product";
import "./Product"
function Sale()  {
    
    
    
    return (
        <div className="sale">
            <div className="heading">SALE IS ON!!!!</div>
            <table className="table1">
                <div className="coinsection">
                <tr  >
                    <td>
                        <Product
                        id="11"
                        weight={10}
                        rating={5}
                        image="product/3.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="12"
                        weight={10}
                        rating={5}
                        image="product/4.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="13"
                        weight={10}
                        rating={5}
                        image="product/5.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="14"
                        weight={10}
                        rating={5}
                        image="product/2.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="ringsection" id={'ringsection'}>
                <tr  >
                    <td>
                        <Product
                        id="15"
                        weight={18}
                        rating={4}
                        image="product/39.jpg"
                        title="22-kt GOLD RING"
                        />
                        
                    </td>
                    <td>
                        <Product
                        id="16"
                        weight={14}
                        rating={4}
                        image="product/40.jpg"
                        title="22-kt GOLD RING"
                        />
                    </td>
                    <td>
                        <Product
                        id="17"
                        weight={16}
                        rating={4}
                        image="product/41.jpg"
                        title="22-kt MAHARANI RING"
                        />
                    </td>
                    <td>
                        <Product
                        id="18"
                        weight={8}
                        rating={4}
                        image="product/48.jpg"
                        title="22-kt LIGHT WEIGHT RING"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="necklacesection" id={'necklacesection'}>
                <tr  >
                    <td>
                        <Product
                        id="19"
                        weight={40}
                        rating={4}
                        image="product/11.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="20"
                        weight={45}
                        rating={4}
                        image="product/12.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="21"
                        weight={50}
                        rating={4}
                        image="product/13.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="22"
                        weight={35}
                        rating={4}
                        image="product/15.jpg"
                        title="22-kt Laxmi necklace"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="earingsection" id={'earingsection'}>
                <tr  >
                    <td>
                        <Product
                        id="23"
                        weight={4.9}
                        rating={4}
                        image="ear1.png"
                        title="WONDROUS EMERALD STUD EARINGS"
                        />
                    </td>
                    <td>
                        <Product
                        id="24"
                        weight={9.8}
                        rating={5}
                        image="ear2.png"
                        title="STATELY EMERALD AND RUBY DROP EARING"
                        />
                    </td>
                    <td>
                        <Product
                        id="25"
                        weight={5.2}
                        rating={4}
                        image="ear3.png"
                        title="ALINA PEARL STUD EARINGS"
                        />
                    </td>
                    <td>
                        <Product
                        id="26"
                        weight={4.6}
                        rating={3}
                        image="ear4.png"
                        title="NISHIKA RUBY STUD EARINGS"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="pendantsection" id={'pendantsection'}>
                <tr  >
                    <td>
                        <Product
                        id="27"
                        weight={22}
                        rating={4}
                        image="product/43.jpg"
                        title="18-kt pendant-set"
                        />
                    </td>
                    <td>
                        <Product
                        id="28"
                        weight={24}
                        rating={5}
                        image="product/44.jpg"
                        title="18-kt pendant-set"
                        />
                    </td>
                    <td>
                        <Product
                        id="29"
                        weight={26}
                        rating={5}
                        image="product/45.jpg"
                        title="18-kt pendant-set"
                        />
                    </td>
                    <td>
                        <Product
                        id="30"
                        weight={12}
                        rating={3}
                        image="product/70.jpg"
                        title="18-kt Diamond chain-pendant"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="pendantsection" id={'pendantsection'}>
                <tr  >
                    <td>
                        <Product
                        id="31"
                        weight={60}
                        rating={4}
                        image="product/crown1.png"
                        title="18-kt Platinum Crown"
                        />
                    </td>
                    <td>
                        <Product
                        id="32"
                        weight={70}
                        rating={5}
                        image="product/crown2.png"
                        title="18-kt Platinum Crown"
                        />
                    </td>
                    <td>
                        <Product
                        id="33"
                        weight={45}
                        rating={5}
                        image="product/crown3.png"
                        title="18-kt Platinum Crown"
                        />
                    </td>
                    <td>
                        <Product
                        id="34"
                        weight={40}
                        rating={3}
                        image="product/crown4.png"
                        title="18-kt Diamond chain-pendant"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="justtry" id={'justtry'}>idhar aa</div>
            </table>
            
            
        </div>
    )
}

export default Sale
