document.addEventListener("DOMContentLoaded", function(event) {
    if (Cookies.get('allowCookies')) {
        document.getElementById('cookieBar').classList.remove('show-cookiebar');
    }
});

function cookieDecision(element) {
    if (element.classList.contains('allow')) {
        Cookies.set('allowCookies', 1);
    }
    if (element.classList.contains('forbid')) {
        Cookies.set('allowCookies', 0);
    }
    document.getElementById('cookieBar').classList.remove('show-cookiebar');
}