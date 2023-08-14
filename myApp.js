let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

const logger = function (req, res, next) {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    console.log(method + " " + path + " - " + ip);
    next();
}

app.use(logger);

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



























module.exports = app;
