module.exports = function($scope, $http, BoardService) {
    $scope.showGpioInfo = false;
    $scope.selectedPin = null;
    $scope.gpio = BoardService;

    $scope.setSelectedPin = function(pin) {
        $scope.selectedPin = pin;
    };
};
