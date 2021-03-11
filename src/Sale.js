import React from 'react'
import "./Sale.css"
import Product from "./Product";
import "./Product"
function Sale() {
    return (
        <div className="sale">
            <div className="heading">SALE IS ON!!!!</div>
            <table className="table1">
                <div className="coinsection">
                <tr  >
                    <td>
                        <Product
                        id="7"
                        weight={10}
                        rating={5}
                        image="product/3.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={10}
                        rating={5}
                        image="product/4.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={10}
                        rating={5}
                        image="product/5.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={10}
                        rating={5}
                        image="product/2.jpg"
                        title="PRINTED GOLD COIN"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="earingsection" id={'ringsection'}>
                <tr  >
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/39.jpg"
                        title="22-kt kundan necklace"
                        />
                        
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/40.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/41.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/48.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    
                </tr>
                </div>
                <div className="necklacesection" id={'necklacesection'}>
                <tr  >
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/11.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/12.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/13.jpg"
                        title="22-kt kundan necklace"
                        />
                    </td>
                    <td>
                        <Product
                        id="7"
                        weight={30}
                        rating={4}
                        image="product/15.jpg"
                        title="22-kt kundan necklace"
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
