app.directive('standardInput', function(){
	var directive = {
		link: link,
		restrict: 'EA',
		replace: true,
		// controller: 'MainController',
  		controllerAs: 'mc',
    	// bindToController: {
    	//     labeltext: '@',
    	//     inputtype: '@',
    	//     inputclass: '@'
    	// },
    	scope: {
	    	label: '@label',
    	    type: '@type',
    	    inputclass: '@inputclass',
    	    placeholder: '@placeholder'
	    },
		template: '<div class="form-group">'
						+'<label>{{ label }}</label>'
						+'<input type="{{ type }}" class="{{ inputclass }}" placeholder="{{ placeholder }}">'
					+'</div>'
	};

	return directive;

	function link(scope, element, attrs) {
		// console.log(scope.label);
  //       console.log(scope.type);
  //       console.log(scope.inputclass);
		// scope.$watch('standardInput', function(value){
  //           if(value){
  //               console.log(value);
  //           }
  //       });
	}
})