/* scripts/controllers/CourseEntry.js */

(function() {
    
    'use strict';
    
    function CourseEntry(time) {
        var vm = this;
        vm.courseentries = [];
        
        time.getTime().then(function(results){
            vm.courseentries = results;
            console.log(vm.courseentries);
        }, function(error) {
            console.log(error);
        });
    }
    
    angular
        .module('mcleTrackr')
        .controller('CourseEntry', CourseEntry);

})();