angular.module("angularMultiCarousel").run(["$templateCache", function($templateCache) {$templateCache.put("multi-carousel/multi-carousel.html","<div ng-mouseover=\"disable()\" ng-mouseleave=\"enable()\">\n    <inner ng-transclude></inner>\n    <div class=\"controls\" ng-show=\"items.length > 1\">\n        <a class=\"left multi-carousel-control\" ng-click=\"prev()\">\n            <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </a>\n        <a class=\"right multi-carousel-control\" ng-click=\"next()\">\n            <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </a>\n    </div>\n</div>\n");}]);