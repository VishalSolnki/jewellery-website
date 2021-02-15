import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
function Payment() {
    const [{basket,user} , dispatch]=useStateValue();


    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to ="/checkout">{basket?.length} items
                    </Link>)

                </h1>



                {/*  delivery add*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>delivery add</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>mithibai college</p>
                        <p>vileparle</p>

                    </div>
                </div>
                {/* reviw items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery </h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item =>(
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
                {/* psyment method*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* stripe magic */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
