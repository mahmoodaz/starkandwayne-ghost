define("ghost/mixins/pagination-route", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var defaultPaginationSettings = {
        page: 1,
        limit: 15
    };

    var PaginationRoute = Ember.Mixin.create({

        /**
         * Sets up pagination details
         * @param {settings}: object that specifies additional pagination details
         */
        setupPagination: function (settings) {

            settings = settings || {};
            settings = _.defaults(settings, defaultPaginationSettings);

            this.set('paginationSettings', settings);
            this.controller.set('paginationSettings', settings);
        }

    });

    __exports__["default"] = PaginationRoute;
  });