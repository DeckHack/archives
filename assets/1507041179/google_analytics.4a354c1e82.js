/*eslint-disable */
/* Google Analytics Asynchronous Tracking */
/* For more information see here: */
/* http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html */

var _gaq = _gaq || [];
// Set state before tracking page view
_gaq.push(['_setAccount', 'UA-4790629-1']);
_gaq.push(['_setCustomVar',
    1,                      // Slot 1
    'Env',                  // Variable name
    TD.util.getAppEnv(),    // Variable value
    2                       // session-level scope
]);
_gaq.push(['_setCustomVar',
    2,          // Slot 2
    'Version',  // Variable name
    TD.version, // Variable value
    2           // session-level scope
]);

// Tracking the page view
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    ga.setAttribute('async', 'true');
    var i = document.getElementsByTagName('script')[0]; i.parentNode.insertBefore(ga, i);
})();

