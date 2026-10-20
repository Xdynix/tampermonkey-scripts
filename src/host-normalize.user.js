// ==UserScript==
// @name         Host Normalize
// @namespace    https://github.com/Xdynix/tampermonkey-scripts
// @homepage     https://github.com/Xdynix/tampermonkey-scripts
// @version      1.1.1
// @description  Redirect alternate hostnames to their canonical host.
// @author       Xdynix
// @updateURL    https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/host-normalize.user.js
// @downloadURL  https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/host-normalize.user.js
// @match        https://bgm.tv/*
// @match        https://nga.178.com/*
// @match        https://ngabbs.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const ngaRule = {host: 'bbs.nga.cn', dropParams: ['rand']};
    const rules = {
        'bgm.tv': {host: 'bangumi.tv', dropParams: []},
        'nga.178.com': ngaRule,
        'ngabbs.com': ngaRule,
    };

    const url = new URL(window.location.href);
    const rule = rules[url.host];
    if (rule === undefined) {
        return;
    }
    url.host = rule.host;
    for (const key of rule.dropParams) {
        url.searchParams.delete(key);
    }
    window.location.replace(url.toString());
})();
