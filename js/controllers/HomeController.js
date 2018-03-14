app.controller('HomeController', ['$scope', function($scope) {
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        slides.push({
            image: [
                "https://webmppcapstone.blob.core.windows.net/fruitsimages/strawberries.jpg",
                "https://webmppcapstone.blob.core.windows.net/fruitsimages/banana.jpg",
                "https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg",
                "https://webmppcapstone.blob.core.windows.net/dairy-royaltyfree/wholemilk.png"
            ][slides.length % 4],
            text: ['...do have a unique shopping experience', '...products are delivered within the hour', '...grocery shopping made easy', '...quality assured'][slides.length % 4],
            id: currIndex++
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
}]);