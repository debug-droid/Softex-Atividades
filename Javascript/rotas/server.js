const express = require('express');
const app = express();
const port = 3333;

let userRoute = require('./userRouter');

app.use('/', userRoute);

app.listen(port, () => {
    console.log(`Listen port on ${port}`);
});