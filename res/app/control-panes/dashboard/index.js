module.exports = angular.module('stf.dashboard', [
  require('./navigation/index').name,
  require('./browser/index').name,
  require('./input/index').name,
  require('./shell/index').name,
  require('./upload/index').name
])
  .run(["$templateCache", function ($templateCache) {
    $templateCache.put(
      'control-panes/dashboard/dashboard.jade'
      , require('./dashboard.jade')
    )
  }])
  .controller('DashboardCtrl', require('./dashboard-controller'))
