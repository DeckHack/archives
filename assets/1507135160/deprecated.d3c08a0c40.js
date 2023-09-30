var getURLParameter = function (name) {
    var paramsRegex = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)');
    return decodeURIComponent(
        (
            paramsRegex.exec(location.search) || [null, '']
        )[1].replace(/\+/g, '%20')
    ) || null;
};

$(document).ready(function () {
    var appEnv = getURLParameter('appenv');

    // Web/Chrome
    var $restartBrowser = $('.js-restart-browser');

    // Mac
    var $mac = $('.js-mac');
    var $macAppStoreButton = $('.js-mac-app-store');

    switch (appEnv) {
        case 'mac':
            $mac.removeClass('is-hidden');
            $macAppStoreButton.click(function () {
                window.open('macappstore://itunes.apple.com/app/id485812721?mt=12');
            });

            // Manually open link clicks
            $('a').click(function (event) {
                window.open($(event.currentTarget).attr('href')).focus();
            });

            break;
        default:
            $restartBrowser.removeClass('is-hidden');
            break;
    }

    if (window.deck && window.deck.closeLoadingScreen) {
        window.deck.closeLoadingScreen();
    }

});
