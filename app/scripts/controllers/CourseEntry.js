/* scripts/controllers/CourseEntry.js */

(function() {
    
    'use strict';
    
    function CourseEntry(time) {
        var vm = this;
        vm.courseentries = [];
        vm.totalTime = {};
        
        time.getTime().then(function(results){
            vm.courseentries = results;
            updateTotalTime(vm.courseentries);
        }, function(error) {
            console.log(error);
        });
        
        function updateTotalTime(courseentries) {
            vm.totalTime = time.getTotalTime(courseentries);
        }
    }
    
    angular
        .module('mcleTrackr')
        .controller('CourseEntry', CourseEntry);

})();