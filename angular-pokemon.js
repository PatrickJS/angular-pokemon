;(function(module, angular, undefined) {
'use strict';

angular.module('ngPokemon', ['angular-pokemon']);

module.directive('pokemon', function() {
  return function(scope, element, attrs) {
    var img = angular.element('<img>');
    element.html('');
    element.append(img);
    scope.$watch(attrs.ngPokemon, function(thatPokemon) {
      if (thatPokemon) {
        img.attr('src', 'http://img.pokemondb.net/artwork/' + thatPokemon.toLowerCase() + '.jpg');
      }
    });
  };
});

}(angular.module('angular-pokemon', []), angular));

