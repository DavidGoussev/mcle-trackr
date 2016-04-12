(function() {
    function ModalCtrl($scope, Timekeeper) {
        $('.modal-trigger').leanModal();
        
        $scope.timekeepers = Timekeeper.all;
        
        $scope.addTimekeeper = function(){
            Timekeeper.create($scope.timekeeper).then(function(data){
                $scope.timekeeper.username = '';
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