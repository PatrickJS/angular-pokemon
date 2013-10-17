(function(angular, undefined) {
"use strict";

angular.module('angular-pokemon', [])
  .directive('pokemon', function() {
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

}(angular));

