// ==UserScript==
// @name         Minimal clever
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  Do you only use Clever to access links? This removes the sidebar and catagory labels.
// @author       Epicminer256
// @source       https://github.com/Epicminer256/tampermonkey-scripts/
// @match        https://clever.com/in/yukon/student/portal
// @icon         https://www.google.com/s2/favicons?sz=64&domain=clever.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let stEl = document.createElement("style")
    stEl.innerHTML = `
    #__MAIN_APP__ > div.flex--grow.flexbox.flex--direction--column.App--container > div.flex--grow.flexbox.View--container > div.flexbox.flex--direction--column.Sidebar--container {
    display: none !important;
    }
    .Category--title{
    display:none !important;
    }
    .StudentTopBar--topBarContainer{
    position: unset !important;
    }
    `
    document.head.appendChild(stEl)
})();
