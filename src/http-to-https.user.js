// ==UserScript==
// @name         HTTP to HTTPS
// @namespace    https://github.com/Xdynix/Tampermonkey-Scripts
// @homepage     https://github.com/Xdynix/tampermonkey-scripts
// @version      0.2.3
// @description  Redirect sites to HTTPS
// @author       Xdynix
// @updateURL    https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/http-to-https.user.js
// @downloadURL  https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/http-to-https.user.js
// @match        http://bangumi.tv/*
// @match        http://jandan.net/*
// @match        http://meipin.im/*
// @match        http://www.anitama.cn/*
// @match        http://www.chuapp.com/*
// @match        http://www.vgtime.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // noinspection HttpUrlsUsage
    window.location.replace(window.location.href.replace('http://', 'https://'));
})();
