(function() {
    'use strict';

    angular
        .module('angularMultiCarousel')
        .directive('multiCarousel', multiCarousel);

    function multiCarousel($animate) {
        return {
            restrict: 'E',
            scope: true,
            link: link
        };

        function link(scope, element) {

            var moving = false;
            var inner = angular.element(element[0].querySelector('inner'));

            // API
            scope.prev = prev;
            scope.next = next;

            function prev() {

                if (moving) {
                    return;
                }

                var item = scope.items.pop();
                scope.items.unshift(item);

                moving = true;

                $animate.addClass(inner, 'prev').then(function() {
                    inner.removeClass('prev');
                    moving = false;
                });
            }

            function next() {

                if (moving) {
                    return;
                }

                var item = scope.items.shift();
                scope.items.push(item);

                moving = true;

                $animate.addClass(inner, 'next').then(function() {
                    inner.removeClass('next');
                    moving = false;
                });
            }

        }
    }

}());
