angular.module('firebase.config', [])
  .constant('FBURL', 'https://ibs-ha2.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
