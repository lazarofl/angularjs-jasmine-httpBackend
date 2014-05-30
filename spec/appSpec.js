describe('Service: service', function () {

  var service, $httpBackend;

  beforeEach(function(){
      module('app');
    inject(function($injector){
        service = $injector.get('service');
        $httpBackend = $injector.get('$httpBackend');
    });
  });

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  describe('service', function(){
    
    it('Cannot be null or undefined', function(){
        expect(service).not.toBe(null); 
        expect(service).toBeDefined(); 
    });
    
    describe('Total itens',function(){
        it('must be 3', function () {

            service.getData().then(function (result){
                expect(result.data.length).toEqual(3);
            });

            $httpBackend.flush();
        });
    });

  });

});