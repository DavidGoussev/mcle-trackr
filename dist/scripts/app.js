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
                controller: 'CourseEntry',
                controllerAs: 'vm',
                templateUrl: '/templates/home.html'
            });
            
    }
    
    angular
        .module('mcleTrackr', ['ui.router', 'ui.bootstrap', 'ngResource'])
        .config(config);

})();