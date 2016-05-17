'use strict';

var React = require('react'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script,
    App = React.createFactory(require(process.cwd() + '/controllers/index.js'));

module.exports = function (router) {
    var data = {
        name: 'radhika',
        age: '24'
    };

    router.get('/', function (req, res) {
        res.setHeader('Content-Type', 'text/html');

        var props = {
            items: [
              'Item 0',
              'Item 1',
              'Item </script>',
              'Item <!--inject!-->',
            ]
        };

        var html = ReactDOMServer.renderToStaticMarkup(body(null,

          div({ id: 'content', dangerouslySetInnerHTML: { __html:
            ReactDOMServer.renderToString(App(props))
          } }),

          script({ dangerouslySetInnerHTML: { __html:
            'var APP_PROPS = ' + safeStringify(props) + ';'
          } })

          // // We'll load React from a CDN - you don't have to do this,
          // // you can bundle it up or serve it locally if you like
          // script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.min.js'}),
          // script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.min.js'}),

          // // Then the browser will fetch and run the browserified bundle consisting
          // // of browser.js and all its dependencies.
          // // We serve this from the endpoint a few lines down.
          // script({src: '/bundle.js'})
        ));

        // Return the page to the browser
        res.end(html);

    });

    router.get('/prp', function (req, res) {
        //res.send(data);
        res.render('index', data);
    });

    router.post('/prp', function (req, res) {
        console.log('comes here');
        res.json(data);

        //res.render('index', data);
    });

    function safeStringify(obj) {
        return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
    }
};
