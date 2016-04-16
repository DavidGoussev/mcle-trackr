var appFilter = angular.module('totalFilter', []);

appFilter.filter('total', function () {
    return function (input, property) {
        var i = input instanceof Array ? input.length : 0;
        if (typeof property === 'undefined' || i === 0){
            return i;
        } else if (isNaN(input[0][property])) {
            throw 'filter total only counts numeric values';
        } else {
            var total = 0;
            while (i--) 
                total += parseFloat(input[i][property]);
            return total;
        }
    };
});

appFilter.filter('setDecimal', function () {
    return function (input, places) {
        if (isNaN(input)) return input;
        
        return (Math.floor(100 * input) / 100).toFixed(2);
    };
});

