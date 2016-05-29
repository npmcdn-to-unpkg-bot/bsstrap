app.directive('buttonLoader', function(){
	var directive = {
		link: link,
		restrict: 'EA',
		replace: true,
		template: '<button class="btn btn-primary" type="button">'
						+'<span class="btn__text">Submit</span>'
						+'<span class="btn__loader">'
							+'<span class="loader inverted small"></span>'
						+'</span>'
					+'</button>'
	};
	return directive;

	function link (scope, element, attrs) {
		$(element).on('click', function(event) {
			event.preventDefault();
			$(element).toggleClass('is-loading');
		});
	}
})

app.directive('standardInput', function(){
	var directive = {
		link: link,
		restrict: 'E',
		replace: true,
		// controller: 'MainController',
  //   	controllerAs: 'mc',
    	// bindToController: {
    	//     labeltext: '@',
    	//     inputtype: '@',
    	//     inputclass: '@'
    	// },
    	scope: {
	    	label: '@',
    	    type: '@',
    	    inputclass: '@'
	    },
		template: '<div class="form-group">'
						+'<label>{{ label }}</label>'
						+'<input type="{{ type }}" class="{{ inputclass }}">'
					+'</div>'
	};
	return directive;

	function link(scope, element, attrs) {

	}
})


app.directive("notification", function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            message: '@'
        },
        template: '<div class="alert">{{message}}</div>'
    }
});