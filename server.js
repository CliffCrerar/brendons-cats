const styleConvert = require('./routes');
const express = require('express');
const { resolve } = require('path');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

const routes = [
    '/',
    '/dark-kitty',
    '/me-me-me',
    '/sleepy',
    '/working-here',
    '/whiskers',
    '/meow',
    '/happy-kitty',
    '/about',
    '/wee'
]

function errorPage(err) {
    return errPage = fs.readFileSync('./404.html', 'utf8')
        .replace('{{error}}', err);
}

function setRouteListener(route, relFilePath) {
    app.get(route, (req, res) => {
        try {
            res.type('html');
            res.status(200).send(fs.readFileSync(resolve(relFilePath)));
        } catch (error) {
            res.status(500).send(errorPage(error));
        }
    })
}

app
    .all('*', (req, res, next) => { console.log(res.statusCode, req.path); next() })
app
    .use('/', express.static('./src'));
app
    .use('/styles', styleConvert);

setRouteListener(routes, 'index.html');
// setRouteListener('/dark-kitty','src/pages/dark-kitty.html');

app
    .listen(port, () => console.log(` <-- app running on port ${port} --> `))