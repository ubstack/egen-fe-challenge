describe('Directive: CCApp', function () {

    var compile, scope, finalEle;

    beforeEach(module('CCApp'));

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    describe('credit-card directive', function () {
        it('should render Credit card markup', function () {
            var element = angular.element('<credit-card card="customCard"></credit-card>');
            element = compile(element)(scope);
            expect(element).toBeDefined();
        });
    });
});