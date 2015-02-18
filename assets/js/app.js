var myweb = angular.module('myweb',['ui.bootstrap']);

myweb.controller('myWebController',['$scope','$modal',MyWebController]);
myweb.controller('ModalController',['$scope','$modalInstance','type',ModalController]);