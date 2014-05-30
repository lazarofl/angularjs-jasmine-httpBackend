var app = angular.module('app', []);
app.run(function($httpBackend){
	
	$httpBackend.whenGET('/url').respond(
		[   
		'item1',
		'item2',
		'item3'
		]
		);
	
});