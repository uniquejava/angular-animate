// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function ($routeProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/page-home.html',
            controller: 'mainController'
        })
        // about page
        .when('/about', {
            templateUrl: 'views/page-about.html',
            controller: 'aboutController'
        })
        // contact page
        .when('/contact', {
            templateUrl: 'views/page-contact.html',
            controller: 'contactController'
        })


});
// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function ($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function ($scope) {
    $scope.pageClass = 'page-about';
});


animateApp.controller('contactController', function ($scope) {
    $scope.pageClass = 'page-contact';
});