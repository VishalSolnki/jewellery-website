const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51IL3ttKl4J2RxjBy6171SS8kZL2HjNZObEnvyCmYgHn35FEFKCDL0EBQ2DNHxzQiF9xIeF8uLbIg1BM2HIADVeFY00JZy9XpTv')
//api
// app config
const app=express();
//mddleware
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get('/',(request,response) => response.status(200).send
('hello world'))
app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log('payment req received!! for this amount >>>',total)
    const paymentIntent = await stripe.paymentIntent.create({
        weight:total,
        
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//listen comand
exports.api=functions.https.onRequest(app)
//ex edpnt
//http://localhost:5001/solankijewellers-5472e/us-central1/api