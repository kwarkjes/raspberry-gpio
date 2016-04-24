// OUR APP
var appName = 'raspberryGpio';
var app = require('angular').module(appName, [
    require('angular-ui-router'),
]);

app.config(require('./router'));

// Services
app.service('BoardService', require('./app/services/BoardService'));

// Controllers
app.controller('GpioBoardController', require('./app/controllers/GpioBoardController'));

// Directives
