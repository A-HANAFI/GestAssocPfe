const functions =require ('firebase-functions');
const express = require('express');

var request1 : Request;
var response1 : Response;
const app = express();

app.get('/timestamp', (request, response)=>{
    response1.send(`${Date.now()}`);
});

 exports.app = functions.https.onRequest(app);
