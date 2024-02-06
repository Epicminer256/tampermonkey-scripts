// ==UserScript==
// @name         BusinessU Unsupported Browser Fix
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  Removes the banner on the top of webpages when using a unsupported browser (even though the website still works the same)
// @author       Epicminer256
// @source       https://github.com/Epicminer256/tampermonkey-scripts/
// @match        https://app.businessu.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=businessu.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let style = document.createElement("style");
    style.innerHTML = `
    .ant-alert {
        display: none;
    }
    `;
    document.head.appendChild(style);
})();
