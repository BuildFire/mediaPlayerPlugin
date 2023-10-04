(function (angular, buildfire) {
    'use strict';
    //created MediaPlayerWidgetServices module
    angular
        .module('MediaPlayerWidgetServices', [])
        .provider('Buildfire', [
            function () {
                this.$get = function () {
                    return buildfire;
                };
            },
        ])
        .factory('Strings', [ 'Buildfire', function (Buildfire) {
                const Strings = function () {
                    this.getString = function (key, callback) {
                        Buildfire.language.get({ stringKey: key }, (err, res) => {
                            if (err) {
                                console.error(err);
                                callback(err, null);
                            } else {
                                callback(null, res);
                            }
                        });
                    };
                };

                return Strings;
            },
        ]);

        
})(window.angular, window.buildfire);