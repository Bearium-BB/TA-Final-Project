'use strict';


console.log(document.cookie ? 'cookies available' : 'no cookies found');
document.cookie ? 'cookies available' : noflow();
const but1 = document.getElementById('but1');

const checkbox0 = document.getElementById('browser');
const checkbox1 = document.getElementById('operating');
const checkbox2 = document.getElementById('screenWidth');
const checkbox3 = document.getElementById('screenHeigth');
const savePre = document.getElementById('but3');
const Manage = document.getElementById('but2');

document.cookie ? document.getElementById('cookies1').style.display = 'none' : document.getElementById('cookies1').style.display = 'block'
Manage.addEventListener('click', function() {
    document.getElementById('cookies1').style.display = 'none'
    document.getElementById('cookies2').style.display = 'block'
})
let cookieNames = [
    'Browser',
    'Operating system',
    'Screen height',
    'Screen width'
];
let cookieValues = [
    fnBrowserDetect(),
    operatingSystemDetect(),
    screen.height,
    screen.width
];

function getCookie() {
    var x = document.cookie;
    console.log(x)
}

function setCookie(name, value) {
    let limit = new Date();
    limit.setSeconds(limit.getSeconds() + 10);
    limit = limit.toUTCString();



    const options = {
        path: '/',
        SameSite: 'Lax',
        expires: limit
    };



    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);



    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }



    document.cookie = updatedCookie;
}


but1.addEventListener("click", function() {
    document.getElementById('cookies1').style.display = 'none'
    for (let i = 0; i < cookieNames.length; i++) {
        setCookie(cookieNames[i], cookieValues[i], {...this.options, 'max-age': 15 });
    }
    haveflow();
});

let browser = true;
let operating = true;
let screenHeigth = true;
let screenWidth = true;

checkbox0.addEventListener('change', function() {
    if (browser) {
        browser = false
    } else {
        browser = true
    }
});

checkbox1.addEventListener('change', function() {
    if (operating) {
        operating = false
    } else {
        operating = true
    }
});

checkbox2.addEventListener('change', function() {
    if (screenWidth) {
        screenWidth = false
    } else {
        screenWidth = true
    }
});

checkbox3.addEventListener('change', function() {
    if (screenHeigth) {
        screenHeigth = false
    } else {
        screenHeigth = true
    }
});

function fnBrowserDetect() {

    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "edge";
    } else {
        browserName = "No browser detection";
    }

    return browserName
}

function operatingSystemDetect() {
    var Name = "Not known";
    if (navigator.appVersion.indexOf("Win") != -1) Name =
        "Windows OS";
    if (navigator.appVersion.indexOf("Mac") != -1) Name =
        "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) Name =
        "UNIX OS";
    if (navigator.appVersion.indexOf("Linux") != -1) Name =
        "Linux OS";

    return Name
}

savePre.addEventListener('click', function() {
    if (browser) {
        setCookie(cookieNames[0], cookieValues[0]);
    }

    if (operating) {
        setCookie(cookieNames[1], cookieValues[1]);
    }

    if (screenHeigth) {
        setCookie(cookieNames[2], cookieValues[2]);
    }

    if (screenWidth) {
        setCookie(cookieNames[3], cookieValues[3]);
    }
    if (!browser && !operating && !screenHeigth && !screenWidth) {
        setCookie("cookie", 'no');
    }
    document.getElementById('cookies2').style.display = 'none'
    haveflow();
});
getCookie();

// (A) DISABLE SCROLL
function noflow() {
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
}

// (B) ENABLE SCROLL
function haveflow() {
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}