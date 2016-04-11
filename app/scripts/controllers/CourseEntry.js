/* scripts/controllers/CourseEntry.js */

(function() {

    'use strict';

    function CourseEntry(time) {
        var vm = this;
        vm.courseentries = [];
        vm.totalTime = {};


        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year
            format: 'mm/dd/yyyy',
            hiddenName: true,
            onSet: function(ele) {
                vm.dateIn = $('.datepicker').pickadate().val().toString();
                if(ele.select){
                    this.close();
                }
            }

        });

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );



        time.getTime().then(function(results){
            vm.courseentries = results;
//            updateTotalTime(vm.courseentries);
        }, function(error) {
            console.log(error);
        });

//        function updateTotalTime(courseentries) {
//            vm.totalTime = time.getTotalTime(courseentries);
//        }

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
                "user_email":"jsmith",
                "user_firstname":"Joe",
                "user_lastname":"Smith",
                "clockIn":vm.clockIn,
                "dateIn":vm.dateIn,
                "course":vm.course,
                "provider": "State Bar",
                "category": "Ethics"
            });

//            updateTotalTime(vm.courseentries);

            vm.course = "";
            vm.dateIn = "";
            vm.clockIn = "";
//            vm.courseForm.$setPristine();
        }

    }

    angular
        .module('mcleTrackr')
        .controller('CourseEntry', CourseEntry);

})();