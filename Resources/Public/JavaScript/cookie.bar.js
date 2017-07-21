document.addEventListener("DOMContentLoaded", function(event) {
    if (Cookies.get('allowCookies')) {
        document.getElementById('cookieBar').style.display = 'none';
        document.getElementById('cookieBar').classList.remove('cookiebar__show');
    }
});

function cookieDecision(element) {
    if (element.classList.contains('allow')) {
        Cookies.set('allowCookies', 1);
    }
    if (element.classList.contains('forbid')) {
        Cookies.set('allowCookies', 0);
    }
    document.getElementById('cookieBar').classList.remove('cookiebar__show');
}