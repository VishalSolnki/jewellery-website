const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51INxunJteJyyBz8sI9HkjXUBPCTMvMM4YFJE8bQlcRVU4RULPP1BDCj9IcnkqTE5w7jJnaZL0iYbGEKnilE5FHfk00fKyBCbtC');

//api

// app config
const app = express();
//middleware
app.use(cors({ origin: true}));
app.use(express.json());

//api routes
app.get('/',(request,response)=> response.status(200).send
('hello world'))
app.post('/payments/create',async (request,response) => {
    const total=request.query.total;

    console.log('Payment req received >>>',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency : "usd",
    });
    const c=  {clientSecret: paymentIntent.client_secret}
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
    console.log('client secret jo yaha se nikla is',c)
})
//listen command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/solankijewellers-5472e/us-central1/api