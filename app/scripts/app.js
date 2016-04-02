/* scripts/app.js */

(function() {
    
    'use strict';
    
    function config($stateProvider, $locationProvider) { 
        $locationProvider 
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('mcle', {
                url: '/',
                controller: 'CourseEntry',
                controllerAs: 'vm',
                templateUrl: '/templates/mcle.html'
            });
            
    }
    
    angular
        .module('mcleTrackr', ['ui.router', 'ui.bootstrap', 'ngResource'])
        .config(config);

})();