app.directive('creditCard', function () {
    var directive = {
        scope: {
            card: "="
        },
        templateUrl: './../views/card.html',
        link: function (scope, element, attrs, model) {
            function detectCard() {
                if (/^(34|37)[0-9]{13}$/.test(scope.card)) {
                    scope.cardname = 'american-express';
                } else if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(scope.card)) {
                    scope.cardname = 'visa';
                } else if (/^5[1-5][0-9]{14}$/.test(scope.card)) {
                    scope.cardname = 'mastercard';
                } else if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(scope.card)) {
                    scope.cardname = 'discover';
                } else if (/^(50|56|57|58|59|60|61|62|63|64|65|66|67|68|69)[0-9]{10,17}$/.test(scope.card)) {
                    scope.cardname = 'maestro';
                } else {
                    scope.cardname = 'credit-card';
                }
            }

            detectCard();

            element.bind('change keyup', function () {
                scope.$apply(function () {
                    detectCard();
                });
            });
        }
    }
    return directive;
})