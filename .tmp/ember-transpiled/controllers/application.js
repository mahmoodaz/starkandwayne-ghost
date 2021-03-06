define("ghost/controllers/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationController = Ember.Controller.extend({
        hideNav: Ember.computed.match('currentPath', /(error|signin|signup|setup|forgotten|reset)/),

        topNotificationCount: 0,

        actions: {
            toggleMenu: function () {
                this.toggleProperty('showMenu');
            },

            topNotificationChange: function (count) {
                this.set('topNotificationCount', count);
            }
        }
    });

    __exports__["default"] = ApplicationController;
  });