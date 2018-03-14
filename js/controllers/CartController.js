app.controller('CartController',
    function($scope, cart) {

        $scope.cartItems = cart.getProducts();

        $scope.total = function() {
            var total = 0;
            for (var i = 0; i < $scope.cartItems.length; i++) {
                total += ($scope.cartItems[i].price * $scope.cartItems[i].qty);
            }
            return total;
        }
        $scope.tax = function() {
            var tax = 0;
            if ($scope.cartItems.length > 0) {
                tax = 0.1 * $scope.total();
            }
            return tax;
        }
        $scope.shippingRate = function() {
            var shippingRate = 0;
            if ($scope.cartItems.length > 0) {
                shippingRate = 10;
            }
            return shippingRate;
        }
        $scope.totalCharge = function() {
            return $scope.total() + $scope.tax() + $scope.shippingRate();
        }
        $scope.removeItem = function(name) {
            cart.removeProduct(name);
        }

        // $scope.cartItems = CartService.getProducts();

        // $scope.removeItem = function(index) {
        //     CartService.removeFromCart(index);
        //     $scope.cartItems = CartService.getProducts();
        //     $scope.setSubtotal();
        //     $scope.setShippingRate();
        //     $scope.setTax();
        //     $scope.setTotal();
        // }

        // $scope.setTotal = function() {
        //     angular.forEach($scope.cartItems, function(item) {
        //         item.total = item.price * item.qty;
        //     });
        // };
        // $scope.setTotal();

        // $scope.setSubtotal = function() {
        //     var subtotal = 0;
        //     angular.forEach($scope.cartItems, function(item) {
        //         subtotal += item.total;
        //     });
        //     return subtotal;
        // };
        // $scope.subtotal = $scope.setSubtotal();

        // $scope.setShippingRate = function() {
        //     return 10;
        // }
        // $scope.shippingRate = $scope.setShippingRate();

        // $scope.setTax = function() {
        //     return $scope.subtotal * 0.1;
        // }
        // $scope.tax = $scope.setTax();

        // $scope.setTotal = function() {
        //     return $scope.subtotal + $scope.shippingRate + $scope.tax;
        // }
        // $scope.total = $scope.setTotal();

        // $scope.changeQty = function(index, newQty) {
        //     console.log("i am working");
        //     CartService.updateQty(index, newQty);
        //     $scope.cartItems = CartService.getProducts();

        //     $scope.setTotal();
        //     $scope.setSubtotal();
        //     $scope.setShippingRate();
        //     $scope.setTax();
        //     $scope.setTotal();
        // }

    }
);