const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const cors = require("cors");

dotenv.config();

const app = express();

// body-parse
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// middleware
app.use(morgan('dev'));

//routes
app.use('/api/v1/book', bookRoutes);

app.get('/test', (req, res) => {
    res.status(200).send("Welcome");
})

const PORT = process.env.PORT || 8000;

// listen port
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})

