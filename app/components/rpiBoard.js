module.exports = {
    bindings: {
        gpio: '<',
    },
    templateUrl: 'components/rpi-board.html',
    controller: function() {
        var self = this;
        console.log('board components', this);
    },
}
