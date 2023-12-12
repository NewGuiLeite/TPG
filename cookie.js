// cookie.js

// Função para aceitar todos os cookies
function acceptAllCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    hideCookieBanner();
}

// Função para recusar cookies
function declineCookies() {
    setCookie('cookieConsent', 'declined', 365);
    hideCookieBanner();
}

// Função para esconder o banner de cookies
function hideCookieBanner() {
    document.getElementById('cookieConsent').style.display = 'none';
}

// Função para verificar se o usuário aceitou os cookies anteriormente
function checkCookieConsent() {
    var consent = getCookie('cookieConsent');
    if (consent === 'accepted' || consent === 'declined') {
        hideCookieBanner();
    }
}

// Função para configurar um cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Função para obter o valor de um cookie
function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Verificar consentimento ao carregar a página
document.addEventListener('DOMContentLoaded', checkCookieConsent);
