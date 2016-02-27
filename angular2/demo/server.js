var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('/angular2/demo'));

app.post('/login', function (req, res) {
    var credentials = req.body;
    if (credentials.email == 'bob@gmail.com' && credentials.password == 'bob') {
        res.json({firstname: 'Bob', lastname: 'Nice'}).status(200).send();
        return;
    }
    res.sendStatus(401);
});

app.get('/health', function (req, res) {
    res.send('OK');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});