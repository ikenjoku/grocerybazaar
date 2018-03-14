angular.module("cart", [])
    .factory("cart", function() {
        var cartData = [];
        return {
            addProduct: function(imagelink, name, price, qty) {
                if (arguments.length == 3) {
                    var addedToExistingItem = false;
                    for (var i = 0; i < cartData.length; i++) {
                        if (cartData[i].name == name) {
                            cartData[i].qty++;
                            addedToExistingItem = true;
                            break;
                        }
                    }
                    if (!addedToExistingItem) {
                        cartData.push({ qty: 1, imagelink: imagelink, price: price, name: name });
                    }
                } else {
                    var addedToExistingItem = false;
                    for (var i = 0; i < cartData.length; i++) {
                        if (cartData[i].name == name) {
                            cartData[i].qty += qty;
                            addedToExistingItem = true;
                            break;
                        }
                    }
                    if (!addedToExistingItem) {
                        cartData.push({ qty: qty, imagelink: imagelink, price: price, name: name });
                    }
                }
            },
            removeProduct: function(name) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].name == name) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },
            getProducts: function() {
                return cartData;
            }
        }
    })
    .directive("cartSummary", function(cart) {
        return {
            restrict: "EA",
            templateUrl: "js/components/cart/cartSummary.html",
            controller: function($scope) {
                var cartData = cart.getProducts();
                $scope.subtotal = function() {
                    var subtotal = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        subtotal += (cartData[i].price * cartData[i].qty);
                    }
                    return subtotal;
                }
                $scope.itemCount = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].qty;
                    }
                    return total;
                }
                $scope.tax = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].qty);
                    }
                    return total * 0.1;
                }
                $scope.shippingRate = function() {
                    var shippingRate = 0
                    if ($scope.itemCount() > 0) {
                        shippingRate = 10;
                    }
                    return shippingRate;
                }
                $scope.total = function() {
                    return $scope.subtotal();
                }
            }
        };
    });