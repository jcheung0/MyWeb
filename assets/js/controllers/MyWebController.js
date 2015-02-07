var MyWebController = function($scope,$modal){
	$scope.test = "hello world";
	$scope.tabs = ["Projects","About","Resume"];

	$scope.skills = [
	{name:'Java',value:'4', profiency:'expert'},
	{name:'Python',value:'3', profiency:'proficient'},
	{name:'Javascript',value:'4', profiency:'Expert'},
	{name:'Unity',value:'3', profiency:'proficient'},
	{name:'Android',value:'4', profiency:'Expert'},
	{name:'Mongodb',value:'3', profiency:'proficient'},
	{name:'Spring',value:'4', profiency:'proficient'},
	{name:'Hibernate',value:'4', profiency:'proficient'},
	
	];

	$scope.tabs = [
	{title:'About',value:'80', template:'templates/About.html'},
	{title:'Resume',value:'60', template:'templates/Resume.html'},
	{title:'Projects',value:'70', template:'templates/Projects.html'},
	//{title:'CheatSheet',template:'templates/CheatSheet.html'}
	];



	$scope.open = function (type) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      //controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
	}
}

