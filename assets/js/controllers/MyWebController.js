var MyWebController = function($scope,$modal){
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
	{title:'About',template:'templates/about.html'},
	{title:'Resume',template:'templates/resume.html'},
	{title:'Projects',template:'templates/projects.html'},
	//{title:'CheatSheet',template:'templates/CheatSheet.html'}
	//{title:'Contact',template:'templates/Projects.html'},
	
	];

	$scope.send_page_view = function(){
			console.log("sending event");
  				ga('send', 'pageview',{'page':"/images/Resume.pdf",'title':"Resume page view"});
			
	}

	$scope.open = function (type) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalController',
      size: 'L',
      resolve: {
        type: function(){
        	return type;
        }
      }
    });

    modalInstance.result.then(function(result){

    });

	}
}

