/* scripts/services/time.js */

// abstracting code

(function() {
    
    
    function time($resource) {
        var Time = $resource('/assets/data/time.json');
        
        function getTime() {
            return Time.query().$promise.then(function(results) {
                angular.forEach(results, function(result) {
                    console.log(results);
//                    result.loggedTime = getTimeDiff(result.start_time, result.end_time);
                });
                return results;
            }, function(error) {
                console.log(error);
            });
        }
//        
//        function getTimeDiff(start, end) {
//            var diff = moment(end).diff(moment(start));
//            var duration = moment.duration();
//            return {
//                duration: duration
//            }
//        }
//        
//        function getTotalTime(courseentries) {
//            var totalMilliseconds = 0;
//            
//            angular.forEach(courseentries, function(key) {
//                totalMilliseconds += key.loggedTime.duration._milliseconds;
//            });
//            return {
//                hours: Math.floor(moment.duration(totalMilliseconds).asHours()),
//                minutes: moment.duration(totalMilliseconds).minutes()
//            }
//        }
//        
        return {
            getTime: getTime,
//            getTimeDiff: getTimeDiff,
//            getTotalTime: getTotalTime,
        }
    }
    
    angular
        .module('mcleTrackr')
        .factory('time', time);

})();