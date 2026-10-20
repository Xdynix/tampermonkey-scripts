// ==UserScript==
// @name         Bilibili No Jump Edge
// @namespace    https://github.com/Xdynix/tampermonkey-scripts
// @homepage     https://github.com/Xdynix/tampermonkey-scripts
// @version      0.0.3
// @description  Prevent Bilibili player from opening Edge
// @author       Xdynix
// @updateURL    https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/bilibili-no-edge.user.js
// @downloadURL  https://github.com/Xdynix/tampermonkey-scripts/raw/main/src/bilibili-no-edge.user.js
// @match        https://www.bilibili.com/v/jump-middle-edge*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const url = new URL(window.location.href);
    const urlParams = new URLSearchParams(url.search);
    const mode = urlParams.get('mode');
    if (mode === 'play') {
        const videoId = urlParams.get('bvid');
        if (videoId !== null) {
            window.location.replace(`https://www.bilibili.com/video/${videoId}`);
        }
    } else if (mode === 'space') {
        const userId = urlParams.get('mid');
        if (userId !== null) {
            window.location.replace(`https://space.bilibili.com/${userId}`);
        }
    }
    console.log('Fxxk Bilibili and Edge.');
})();
