describe('Controller: CCController', function () {
    var controller, scope, http;
    // Instantiate a new version of CCApp module before each test
    beforeEach(module('CCApp'));

    // Before each unit test, instantiate a new instance of the controller
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = function () {
            return $controller('CCController', {
                '$scope': scope
            });
        };
    }));

    describe('CCController', function () {
        it('should instantiate CCController Properly', inject(function () {
            expect(controller()).not.toBe(undefined);
            expect(JSON.stringify(controller())).toBeDefined();
        }));

        it('should customCard equal to be Defined', inject(function () {
            controller();
            expect(scope.customCard).toBeDefined();
        }));

        it('should have cards available on load', inject(function () {
            controller();
            expect(scope.cards).toBeDefined();
        }));
    });
});