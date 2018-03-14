app.constant("dataUrl", "https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
    .controller('bazzarStoreCtrl', function($scope, $http, dataUrl, allProducts) {
        $scope.data = {};
        $scope.altdata = {};
        $scope.transformData = function(data) {
            var allItemsArr = [];
            angular.forEach($scope.data.products, function(cartItem) {
                angular.forEach(cartItem["subcategories"], function(subcatItem) {
                    allItemsArr = allItemsArr.concat(subcatItem.items);
                })
            });
            return allItemsArr;
        }

        $http.get(dataUrl)
            .success(function(data) {
                $scope.data.products = data;
                $scope.altdata.products = $scope.transformData(data);
                allProducts.setData($scope.altdata.products);
            })
            .error(function(error) {
                $scope.data.error = error;
            });

    })