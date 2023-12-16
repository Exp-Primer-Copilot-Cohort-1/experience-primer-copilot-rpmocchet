function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindtoController: true,
    scope: {
      member: '='
    }
  };
}