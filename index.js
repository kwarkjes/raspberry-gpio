// Styling
require("!style!css!sass!./style.scss");

// OUR APP
var appName = 'raspberryGpio';
var app = require('angular').module(appName, [
    require('angular-ui-router'),
]);

app.config(require('./router'));

// Services
app.component('rpiBoard', require('./app/components/rpiBoard'));
app.service('Rpi1Service', require('./app/services/Rpi1Service'));
app.service('Rpi3Service', require('./app/services/Rpi3Service'));

// Controllers
app.controller('GpioBoardController', require('./app/controllers/GpioBoardController'));
app.controller('RaspberryListController', require('./app/controllers/RaspberryListController'));

// Directives
