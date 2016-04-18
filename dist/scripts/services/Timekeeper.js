(function () {
    function Timekeeper($firebaseArray) {
        var firebaseRef = new Firebase("https://mcletrackr.firebaseio.com");
        var timekeepers = $firebaseArray(firebaseRef.child('timekeepers'));
        
        
        return {
            all: timekeepers,
            
            send: function(newTimekeeper) {
                return timekeepers.$add(newTimekeeper)
            },
            
            edit: function(timekeeper) {
                return timekeepers.$save(timekeeper)
            },
            
            getCourses: function(timekeeperId) {
                var filteredCourses = firebaseRef.child('courses').orderByChild('timekeeperId').equalTo(timekeeperId);
                return $firebaseArray(filteredCourses);
            },
            
            delete: function(timekeeperId) {
                return timekeepers.$remove(timekeeperId)
            }
        };
        

    }
    
    angular
        .module('mcleTrackr')
        .factory('Timekeeper', ['$firebaseArray', Timekeeper]);
})();