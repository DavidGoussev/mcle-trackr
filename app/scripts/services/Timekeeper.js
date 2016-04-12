(function () {
    function Timekeeper($firebaseArray) {
        var firebaseRef = new Firebase("https://mcletrackr.firebaseio.com");
        var timekeepers = $firebaseArray(firebaseRef.child('timekeepers'));
//        var messages = $firebaseArray(firebaseRef.child('messages'));
        
        
        return {
            all: timekeepers,
            
//            messages: messages,
            
            create: function(newTimekeeper) {
                return timekeepers.$add(newTimekeeper)
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