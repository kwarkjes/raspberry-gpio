module.exports = function($scope, $http, board) {
    console.log('ssss');
    $scope.showGpioInfo = false;
    $scope.selectedPin = null;
    $scope.gpio = board;

    $scope.setSelectedPin = function(pin) {
        $scope.selectedPin = pin;
    };
};
