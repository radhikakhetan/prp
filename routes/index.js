'use strict';

module.exports = function (router) {
    var data = {
        name: 'radhika',
        age: '24'
    };
    router.get('/prp', function (req, res) {
        res.send(data);
    });
};
