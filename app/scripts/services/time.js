/* scripts/services/time.js */

// abstracting code

(function() {
    
    'use strict';
    
    function time($resource) {
        var Time = $resource('data/time.json');
        
        function getTime() {
            return Time.query().$promise.then(function(results) {
                return results;
            }, function(error) {
                console.log(error);
            });
        }
        
        return {
            getTime: getTime,
        }
    }
    
    angular
        .module('mcleTrackr')
        .factory('time', time);

})();