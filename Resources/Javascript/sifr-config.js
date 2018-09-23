/*****************************************************************************
It is adviced to place the sIFR JavaScript calls in this file, keeping it
separate from the `sifr.js` file. That way, you can easily swap the `sifr.js`
file for a new version, while keeping the configuration.

You must load this file *after* loading `sifr.js`.

That said, you're of course free to merge the JavaScript files. Just make sure
the copyright statement in `sifr.js` is kept intact.
*****************************************************************************/

// Make an object pointing to the location of the Flash movie on your web server.
// Try using the font name as the variable name, makes it easy to remember which
// object you're using. As an example in this file, we'll use Futura.
var futura = { src: 'Resources/Data/comic_sans.swf' 
      , ratios: [7, 1.32, 11, 1.31, 13, 1.24, 14, 1.25, 19, 1.23, 27, 1.2, 34, 1.19, 42, 1.18, 47, 1.17, 48, 1.18, 69, 1.17, 74, 1.16, 75, 1.17, 1.16]
};


// You probably want to switch this on, but read <http://wiki.novemberborn.net/sifr3/DetectingCSSLoad> first.
// sIFR.useStyleCheck = true;
sIFR.activate(futura);

sIFR.replace(futura, {
    selector: 'h1'
        , css: ['.sIFR-root {background-color:#F9C000; font-size : 24px;}']
        , wmode: 'transparent'
});

sIFR.replace(futura, {
    selector: 'h5#pullquote'
      , css: 'em { font-style: normal; color: #660000; }'
      , selectable: false
});

sIFR.replace(futura, {
    selector: 'h3'
      , css: {
          '.sIFR-root': { 'background-color': '#F9C000', 'font-size': '16px'}
      }
      , wmode: 'transparent'
});

sIFR.replace(futura, {
    selector: 'h2',
    css: { '.sIFR-root': { 'background-color': '#F9C000', 'font-size' : '18px' }
    }
    , wmode: 'transparent'
});


  sIFR.replace(futura, {
    selector: 'h4.subhead'
      , css: {
          '.sIFR-root': { 'color': '#660000', 'letter-spacing': -1.5, 'text-transform': 'capitalize' }
      }
      , filters: {
          DropShadow: {
              knockout: true
          , distance: 1
          , color: '#330000'
          , strength: 2
          }
      }
});