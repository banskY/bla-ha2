/**
 * Created by banskY on 28.08.2016.
 */

var config = {
	apiKey: "AIzaSyDLEnmxdU2qx6F9QaAUAvwmMMr0ZX4O8io",
	authDomain: "ibs-ha2.firebaseapp.com",
	databaseURL: "https://ibs-ha2.firebaseio.com",
	storageBucket: "ibs-ha2.appspot.com",
};
firebase.initializeApp(config);

window.database = firebase.database();