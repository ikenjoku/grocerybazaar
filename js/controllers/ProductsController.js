app
    .constant("productListActiveClass", "btn-danger")
    .constant("productListPageCount", 8)
    .controller('ProductsController', function($scope, $filter, productListActiveClass, productListPageCount, cart) {
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        };

        $scope.selectPage = function(newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function(product) {
            if ($scope.uniqueCriteria == 'category') {
                $scope.filterPool = product.category;
            } else {
                $scope.filterPool = product.subcategory;
            }
            return selectedCategory == null || $scope.filterPool == selectedCategory;
        }

        $scope.uniqueCriteria = 'category';
        $scope.textToShow = 'Categories';
        $scope.toggleUnique = function() {
            if ($scope.uniqueCriteria == 'category') {
                $scope.uniqueCriteria = 'subcategory';
                $scope.textToShow = 'Subcategories';
            } else {
                $scope.uniqueCriteria = 'category';
                $scope.textToShow = 'Categories';
            }

        }

        $scope.getCategoryClass = function(category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function(page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function(product) {
            cart.addProduct(product.imagelink, product.name, product.price);
        }
        $scope.propertyName = 'none';

    });