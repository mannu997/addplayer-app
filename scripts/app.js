angular.module("add-player",["ngRoute"])
       .config(["$routeProvider",function($routeProvider) {
           $routeProvider
               .when("#/listing",{
               	    templateUrl:"template/listing.html",
               	    controller:"LeaderboardController"
               })
               .when("/addplayer",{
               	    templateUrl:"template/addplayer.html",
               	    controller:"LeaderboardController"
               })
               .when("/editplayer",{
               	    templateUrl:"template/editplayer.html",
               	    controller:"LeaderboardController"
               })
       }]);

