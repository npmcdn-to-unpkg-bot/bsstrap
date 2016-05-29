app.controller('MainController', function($scope, $modal, $aside, $templateCache, $timeout) {
	var signUpModal = $modal({
		container: "body",
		templateUrl: "Views/partials/modal-signup.tpl.html",
		show: false,
		controller: 'MainController',
		controllerAs: 'mc'
	});
	var loginModal = $modal({
		container: "body",
		templateUrl: "Views/partials/modal-login.tpl.html",
		show: false,
		controller: 'MainController',
		controllerAs: 'mc'
	});

	var forgotPasswordModal = $modal({
		container: "body",
		templateUrl: "Views/partials/modal-forgot-password.tpl.html",
		show: false,
		controller: 'MainController',
		controllerAs: 'mc'
	});

	this.showSignUpModal = function() {
		setTimeout(function() {
			signUpModal.show();
		}, 500);
	}

	this.showLogInModal = function() {
		setTimeout(function() {
			loginModal.show();
		}, 500);
	}

	this.showForgotPassword = function() {
		setTimeout(function() {
			forgotPasswordModal.show();
		}, 500);
	}

	this.signup = this.showSignUpModal;
	this.login = this.showLogInModal;
	this.forgotPassword = this.showForgotPassword;
});