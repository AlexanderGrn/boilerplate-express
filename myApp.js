let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

app.use('/public', express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', (req, res) => {

    const messageStyle = process.env.MESSAGE_STYLE;
    let message = "Hello json";

    if (messageStyle === 'uppercase') {
        message = message.toUpperCase();
    }

    res.json({
        message: message
    });
});

console.log(process.env.MESSAGE_STYLE);


























module.exports = app;
