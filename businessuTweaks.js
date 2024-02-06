// ==UserScript==
// @name         BusinessU UI Tweaks
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  Tweaks parts of the UI to fit better on smaller screens and make everything a little slimmer. Disclaimer, this will force some menus to stay collapsed!
// @author       Epicminer256
// @source       https://github.com/epicminer256
// @match        https://app.businessu.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=businessu.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let styles = document.createElement("style");
    styles.innerHTML = `
    /* Topbar */
    .ldRIGp {
        padding: 2px 8px 4px;
        height: 50px;
    }
    /* Sidebar */
    .gxHiBH {
        width: 200px;
    }
    
    /* Topics sidebar */
    .hQlAWR {
        min-width: 200px;
    }
    
    /* Top page title */
    h1.ant-typography{
    font-size: 20px
    }
    
    /* Assignments search and semester bar */
    .inFiBU {
        margin: 0;
    }
    
    /* Text reading sections take up 100% the width */
    .fJyCeJ {
        max-width: 100%;
    }
    
    /* Current assignment status padding cut */
    .sc-EElJA.iuGsIA {
        padding: 0 20px;
    }
    
    /* Assignment Name/Path */
    .dqgSVq {
        padding: 18px;
    }
    
    /* Move assignment contents up */
    .sc-kjNGdX.bJmKKH {
        height: 20px !important;
    }
    
    /* Questions no longer have a massive gap between each-other */
    .question-container {
        margin: 20px 0 !important;
    }
    
    /* Assignment search/semester height cut */
    .dUSdQy, .hAPeWl {
        height: 40px;
    }
    .dUSdQy {
        margin: 12px 0;
    }
    
    /* Assignment search/semester doesn't stick to top of screen on scroll */
    .inFiBU {
        position: unset !important;
    }
    .hQlAWR {
        top: 19px;
    }
    `;
    document.head.appendChild(styles);

    // Auto-colapser
    let colapseObserver = new MutationObserver(() => {
        // The assignment title collapse
        let assignmentColapse = document.querySelector(".hRkoWU");
        if(assignmentColapse){
            assignmentColapse.classList.add("collapsed");
            assignmentColapse.classList.add("autocollapsed");
        }
        // The sidebar on the main assignments page
        let sidebarColapse = document.querySelector(".gxHiBH");
        if(sidebarColapse){
            sidebarColapse.classList.add("collapsed");
            sidebarColapse.classList.add("autocollapsed");
        }
    })
    colapseObserver.observe(document, {
        childList: true,
        subtree: true
    });
})();
