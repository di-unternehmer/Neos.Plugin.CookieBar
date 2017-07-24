document.addEventListener("DOMContentLoaded", function(event) {
    if (!Cookies.get('allowCookies')) {
        document.getElementById('cookieBar').classList.remove('cookiebar__hidden');
    }
});

function cookieDecision(element) {
    if (element.classList.contains('allow')) {
        Cookies.set('allowCookies', 1);
    }
    if (element.classList.contains('forbid')) {
        Cookies.set('allowCookies', 0);
    }
    document.getElementById('cookieBar').classList.add('cookiebar__hidden');
}