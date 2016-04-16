(function() {
    function ModalCtrl($scope, Timekeeper) {
        
        $('.modal-trigger').leanModal({
            ready: function() {
                $scope.timekeeper = '';
            }
        });
        
        $scope.timekeepers = Timekeeper.all;
        
        $scope.addTimekeeper = function(){
            Timekeeper.send({
                username: $scope.username,
                firstname: $scope.firstname,
                lastname: $scope.lastname,
            }).then(function(data){
                $scope.username = '';
                $scope.firstname = '';
                $scope.lastname = '';
                console.log('timekeeper created!');
            })
        };
        
        
        $scope.ok = function () {
            $scope.addTimekeeper();
            $('#modal1').closeModal();
        };

        $scope.cancel = function () {
            $('#modal1').closeModal();
        };
    }

    angular
        .module('mcleTrackr')
        .controller('ModalCtrl', ['$scope', 'Timekeeper', ModalCtrl]);
})();