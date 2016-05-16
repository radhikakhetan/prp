'use strict';

module.exports = function (router) {
    var result = {
        name: 'HEllo'
    };
    router.get('/', function (req, res) {
        res.render(req.url, result);
    });
};
