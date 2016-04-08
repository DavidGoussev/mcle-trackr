/* scripts/controllers/CourseEntry.js */

(function() {

    'use strict';

    function CourseEntry(time) {
        var vm = this;
        vm.courseentries = [];
        vm.totalTime = {};

        //        vm.clockIn = new Date();
        vm.clockOut = new Date();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });


        time.getTime().then(function(results){
            vm.courseentries = results;
            updateTotalTime(vm.courseentries);
        }, function(error) {
            console.log(error);
        });

        function updateTotalTime(courseentries) {
            vm.totalTime = time.getTotalTime(courseentries);
        }

        vm.logNewTime = function() {
            if(vm.clockOut < vm.clockIn) {
                alert("you must clock in first!");
                return;
            }

            if(vm.clockIn === 0) {
                alert("you must enter a valid time duration");
                return;
            }

            vm.courseentries.push({
                "user_id":1,
                "user_email":"jsmith@law.com",
                "user_firstname":"Joe",
                "user_lastname":"Smith",
                "loggedTime":vm.clockIn,
                "loggedDate":vm.dateIn,
                "course":vm.course,
                "provider": "State Bar",
                "category": "Ethics"
            });

            updateTotalTime(vm.courseentries);

            vm.course = "";
        }
    }

    angular
        .module('mcleTrackr')
        .controller('CourseEntry', CourseEntry);

})();