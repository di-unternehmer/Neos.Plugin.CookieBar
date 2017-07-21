window.onload = function(cookieBar) {
    if (Cookies.get('allowCookies')) {
        document.getElementById('cookieBar').style.display = 'none';
    }
};

function cookieDecision(element) {
    if (element.classList.contains('allow')) {
        Cookies.set('allowCookies', 1);
    }
    if (element.classList.contains('forbid')) {
        Cookies.set('allowCookies', 0);
    }
    document.getElementById('cookieBar').style.display = 'none';
}