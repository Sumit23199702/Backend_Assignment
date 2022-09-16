const express = require('express')
const mongoose = require('mongoose');
const multer = require('multer');


const route = require('./route/route.js')
const app = express()

app.use(express.json());
app.use(multer().any())


mongoose.connect("mongodb+srv://sumit1997:M1RB5aKqkc64BPrB@cluster0.2yvsztm.mongodb.net/test", { useNewurlParser: true })
    .then(() => console.log("MongoDB is Connected"))
    .catch(error => console.log(error))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});