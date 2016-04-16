/* scripts/app.js */

(function() {
    
    
    function config($stateProvider, $locationProvider) { 
        $locationProvider 
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: '/templates/home.html'
            });
        
            
    }
    
    angular
        .module('mcleTrackr', ['firebase', 'ui.router', 'ui.materialize', 'ngResource', 'totalFilter'])
        .config(config);

})();