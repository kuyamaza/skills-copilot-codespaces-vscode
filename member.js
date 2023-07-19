function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bintToController: true,
        scope: {
            members: '='
        }
    };
}