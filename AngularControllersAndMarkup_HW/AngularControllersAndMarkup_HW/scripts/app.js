/// <reference path="angular.js" />

var videos = [
{
    title: 'Course introduction',
    pictureUrl: 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
    length: '3:32',
    category: 'IT',
    subscribers: 3,
    date: new Date(2014, 12, 15),
    haveSubtitles: false,
    comments: [
		{
		    username: 'Pesho Peshev',
		    content: 'Congratulations Nakov',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 3,
		    websiteUrl: 'http://pesho.com/'
		},

		{
		    username: 'Pesho Peshev',
		    content: 'Congratulations Nakov',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 3,
		    websiteUrl: 'http://pesho.com/'
		},

		{
		    username: 'Pesho Peshev',
		    content: 'Congratulations Nakov',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 3,
		    websiteUrl: 'http://pesho.com/'
		}
    ]
},
{
    title: 'Introduction to AngularJS',
    pictureUrl: 'http://www.gettyimages.com/CMS/Pages/ImageCollection/StaticContent/image5_170127819.jpg',
    length: '13:32',
    category: 'IT - JavaScript',
    subscribers: 33,
    date: new Date(2014, 18, 15),
    haveSubtitles: false,
    comments: [
		{
		    username: 'Pesho Peshev',
		    content: 'Congratulations Nakov',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 3,
		    websiteUrl: 'http://pesho.com/'
		},
		{
		    username: 'Pesho Vanio',
		    content: 'Congratulations Vlado',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 32,
		    websiteUrl: 'http://pesho.com/'
		},

		{
		    username: 'Pesho Peshev',
		    content: 'Congratulations Nakov',
		    date: new Date(2014, 12, 15, 12, 30, 0),
		    likes: 3,
		    websiteUrl: 'http://pesho.com/'
		}
    ]
}];

var videoApp = angular.module('videoApp', []);
videoApp.controller('VideoController', ['$scope', function ($scope) {
    $scope.video = videos[0];
    $scope.linkClass = "disabledLink";

    $scope.changeClass = function () {
        if ($scope.linkClass == "enabledLink") {
            $scope.linkClass = "disabledLink";
        }
        else {
            $scope.linkClass = "enabledLink";
        }
    }
    $scope.videos = videos;

    $scope.changeVideo = function (video) {
        $scope.video = video;
        console.log(video);
    };
}]);

videoApp.controller('ListController', ['$scope', function ($scope) {
    
}]);
