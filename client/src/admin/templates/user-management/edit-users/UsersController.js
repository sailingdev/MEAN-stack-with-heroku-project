(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', UsersController);

    function UsersController(users, UsersService) {

        var vm = this;

        angular.extend(vm, {
            users: users,
            user: {
                role: function(user){
                    return vm.userRole[user.accessLevel];
                }
            },
            userRole: ['User', 'Redactor', 'Administrator']
        });

    }
})();