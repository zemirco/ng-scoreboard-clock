describe('scoreboard', function() {

  var elm, scope;

  // load the scoreboard code
  beforeEach(module('scoreboard'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element(
      '<clock format="HH:mm"></clock>'
    );
    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('clock should show the current time', function() {
    var date = new Date();
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    expect(elm.text()).toBe(hours + ':' + minutes);
  });

  it('clock should allow using custom formats', inject(function($rootScope, $compile) {
    elm = angular.element(
      '<clock format="HH:mm dd-MM-yyyy"></clock>'
    );
    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
    var date = new Date();
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var days = ('0' + date.getDate()).slice(-2);
    var months = ('0' + (date.getMonth()+1)).slice(-2);
    var fullYear = date.getFullYear();

    var res = hours + ':' + minutes + ' ' + days + '-' + months + '-' + fullYear;
    expect(elm.text()).toBe(res);
  }));

});