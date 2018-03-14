app.controller('ProductController', function($scope, $routeParams, allProducts, cart) {
    $scope.allProducts = allProducts.getData();

    var product = $scope.allProducts.find(function(item) {
        return item.name == $routeParams.name;
    })
    $scope.product = product;

    $scope.max = 5;
    $scope.rate = $scope.product.rating;
    $scope.isReadonly = true;
    $scope.qtyToAdd = 1;

    $scope.addProductToCart = function(product) {
        product.qty = $scope.qtyToAdd;
        cart.addProduct(product.imagelink, product.name, product.price, product.qty);
    }
});