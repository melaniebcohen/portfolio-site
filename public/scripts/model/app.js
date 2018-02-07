'use strict';

(function(module) {
  let app = {};

  $('#burger').on('click', function(e) {
    e.preventDefault();

    $('#menu-items').toggleClass('dropdown');
  })
  module.app = app;
})(window)