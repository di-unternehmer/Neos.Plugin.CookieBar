document.addEventListener("DOMContentLoaded", function(event) {
    if (!Cookies.get('allowCookies')) {
        document.getElementById('cookieBar').classList.remove('cookiebar__hidden');
    }
});

var gaID = "ga-disable-" + window['ga-id'];

function cookieDecision(element) {

    if (element.classList.contains('allow')) {
        Cookies.set('allowCookies', 1, { expires: 3650 });
        window[gaID] = false;
    }
    if (element.classList.contains('forbid')) {
        Cookies.set('allowCookies', 0, { expires: 3650 });
        window[gaID] = true;
    }
    document.getElementById('cookieBar').classList.add('cookiebar__hidden');
}

if (Cookies.get('allowCookies') === '1' || Cookies.get('allowCookies') === 1) {

    window[gaID] = false;
}

// OptOut for impress link
function gaOptOut() {
    Cookies.set('allowCookies', 0, { expires: 3650 });
    window[gaID] = true;
}
