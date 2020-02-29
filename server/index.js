const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname + '/../public')));

app.use('/about', express.static(path.join(__dirname + '/../public/about.html')))

app.use('/survd', express.static(path.join(__dirname + '/../public/projects/project-1.html')))

app.use('/weather', express.static(path.join(__dirname + '/../public/projects/project-2.html')))

app.use('/beetsneats', express.static(path.join(__dirname + '/../public/projects/project-3.html')))

app.use('/gratitudes', express.static(path.join(__dirname + '/../public/projects/project-4.html')))

app.listen(process.env.PORT || PORT, () => {
    console.log('meet me @ localhost: ', PORT)
})