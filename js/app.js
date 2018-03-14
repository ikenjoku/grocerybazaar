var app = angular.module('bazzarStore', ['ngRoute', 'ui.bootstrap', 'customFilters', 'cart'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'views/home.html'
                })
                .when('/about', {
                    templateUrl: 'views/about.html'
                })
                .when('/contact', {
                    templateUrl: 'views/contact.html'
                })
                .when('/products/:name', {
                    controller: 'ProductController',
                    templateUrl: 'views/product.html'
                })
                .when('/products', {
                    controller: 'ProductsController',
                    templateUrl: 'views/products.html'
                })
                .when('/cart', {
                    controller: 'CartController',
                    templateUrl: 'views/cart.html'
                })
                .when('/placeorder', {
                    templateUrl: 'views/placeOrder.html'
                })
                .when('/complete', {
                    templateUrl: 'views/thankYou.html'
                })
                .otherwise({ redirectTo: '/' });
        }
    ])
    .factory("allProducts", function() {
        var data = [];
        return {
            setData: function(altData) {
                data = altData;
            },
            getData: function() {
                return data;
            }
        }
    });