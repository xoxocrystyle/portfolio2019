const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname + '/../public')));

app.use('/about', express.static(path.join(__dirname + '/../public/about.html')))

app.listen(PORT, () => {
    console.log('meet me @ localhost: ', PORT)
})