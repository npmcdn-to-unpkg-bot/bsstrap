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




// app.directive("notification", function() {
//     return {
//         restrict: 'E',
//         replace: true,
//         transclude: true,
//         scope: {
//             message: '@'
//         },
//         template: '<div class="alert">{{message}}</div>'
//     }
// });