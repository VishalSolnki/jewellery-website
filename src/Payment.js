import React, {useState,useEffect} from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link,useHistory} from "react-router-dom";
import { CardElement,useElements, useStripe } from "@stripe/react-stripe-js";
import  CurrencyFormat  from "react-currency-format";
import { getBasketTotal } from "./reducer";
import Rate from "./Rate";
import axios from  './axios';
import { db } from "./firebase";
import { render } from '@testing-library/react';
const Payment=(props)=> {
    console.log(props.price,'shivam')
    const [{basket,user} , dispatch]=useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error , setError]= useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret, setClientSecret]=useState(true);
    
    const data=props=>{
        const {data} = this.props.location
        
        return(
            
            <h1> {props.price} </h1>
        )
    }
    
    useEffect (() => {
        //genertate special strip sec
        const getClientSecret =async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*5500}`
                //url: `/payments/create?total=${getBasketTotal(basket)*((items.open_price)/28.349)-.000961339025}`
            });
            console.log('iske baad clientsecret',response.data.clientSecret)
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])
    console.log('THE SECRET is >>>',clientSecret)
    
    const handleSubmit = async (event)=> {
        //do fancy stripes
        event.preventDefault();
        setProcessing(true);
        console.log('yaha aarha hai 2.0')
        

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
                
            }
        }).then((paymentIntent)=>{
            //paymentintent=payment
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            //.doc('pi_1IOzxzJteJyyBz8sbbz96JB5_secret_2FyMdadkzAH8W4DmJnhMWCrhg')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
              amount:getBasketTotal(basket)*5500,
                //amount:getBasketTotal(basket)*((items.open_price)/28.349)-.000961339025,
                //amount:paymentIntent.amount,
                created:11,
            })


            setSucceeded(true);
            setError(null)
            setProcessing(false)
            //console.log('yaha tak aarha hai')
            
            // dispatch ({
            //     type:'EMPTY_BASKET'
            // })
            history.replace('/orders')
                
        }).catch((a)=>{
            console.error("jayesh solve 1",a);
        })
            
        
    }
    
    
    const handleChange = event => {
        //listen for chnges in card element
        //display errors as customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                            <CurrencyFormat renderText={(value) =>(
                                <h3> order total : {value} </h3>
                            )}
                            decimalScale={2}
                           //value={getBasketTotal(basket)*5500}
                            
                            value={getBasketTotal(basket)*data}
                            displayType={"text"}
                            ThousandSeparator={true}
                            prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>    

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
