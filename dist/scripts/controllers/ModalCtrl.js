(function() {
    function ModalCtrl($scope, Timekeeper) {
        
        $('.modal-trigger').leanModal();
        
        $scope.timekeepers = Timekeeper.all;
        
        $scope.addTimekeeper = function(){
            $('.modal-trigger').leanModal({
                ready: function() {
                    $scope.timekeeper = '';
                }
            }); 
        
            Timekeeper.send({
                username: $scope.username,
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                group: $scope.group,
                hrsReqTotal: $scope.hrsReqTotal,
                hrsReqEthics: $scope.hrsReqEthics,
                hrsReqComp: $scope.hrsReqComp,
                hrsReqBias: $scope.hrsReqBias,
            }).then(function(data){
                $scope.username = '';
                $scope.firstname = '';
                $scope.lastname = '';
                $scope.group = '';
                console.log('timekeeper created!');
            })
        };
        
        $scope.editTimekeeper = function(timekeeper){
            Timekeeper.edit(timekeeper).then(function(data){
                console.log('timekeeper edited!');
            })
            
            $('#modal2').closeModal();
        };
        
        
        $scope.ok = function () {
            $scope.addTimekeeper();
            $('#modal1').closeModal();
        };
        

        $scope.cancel = function () {
            $('#modal1').closeModal();
            $('#modal2').closeModal();
        };
    }

    angular
        .module('mcleTrackr')
        .controller('ModalCtrl', ['$scope', 'Timekeeper', ModalCtrl]);
})();