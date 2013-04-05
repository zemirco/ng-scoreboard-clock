angular.module('scoreboard', [])
  // inject $timeout and dateFilter service
  .directive('clock', function($timeout, dateFilter) {
    return {
      restrict: 'E',
      template: '<span></span>',
      replace: true,
      link: function(scope, iElem, iAttrs) {
        // save timeoutIds, so that we can cancel the time updates
        var updateTimeoutId;
        var hideTimeoutId;

        var colon = '<span class="colon" style="opacity: 1;">:</span>';

        // schedule update in one second
        var updateLater = function() {
          updateTimeoutId = $timeout(function() {
            updateUi();
          }, 1000);
        };

        // show and hide colon for 500ms, reappear each second
        var hideColon = function() {
          hideTimeoutId = $timeout(function() {
            angular.element('span.colon').css('opacity', '0');
          }, 500);
        };

        // update UI
        var updateUi = function() {
          iElem.html(dateFilter(Date.now(), iAttrs.format).split(':').join(colon));
          hideColon();
          updateLater();
        };

        // listen on DOM destroy and cancel the next UI update
        iElem.bind('$destroy', function() {
          $timeout.cancel(updateTimeoutId);
          $timeout.cancel(hideTimeoutId);
        });

        // start process
        updateUi();

      }
    };
  });