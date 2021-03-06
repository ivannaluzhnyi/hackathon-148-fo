const express = require('express');
const favicon = require('express-favicon');
const http = require('http');
const path = require('path');
let app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

// Server for deploying to Heroku :)
    