var express = require('express');
var app = express();
var PORT = 3030

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
