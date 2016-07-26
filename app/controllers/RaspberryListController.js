module.exports = function($scope, Rpi1Service, Rpi3Service) {
    $scope.gpioRpi1 = Rpi1Service;
    $scope.gpioRpi3 = Rpi3Service;
    console.log('RaspberryListController initialized');
};
