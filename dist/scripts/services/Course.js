(function() {
    function Course($firebaseArray) {
        var firebaseRef = new Firebase("https://mcletrackr.firebaseio.com");
        var courses = $firebaseArray(firebaseRef.child('courses'));
        
        return {
            
            send: function(newCourse) {
                return courses.$add(newCourse);
                console.log(newCourse);
            }
        };
    }

    angular
        .module('mcleTrackr')
        .factory('Course', ['$firebaseArray', Course]);

})();