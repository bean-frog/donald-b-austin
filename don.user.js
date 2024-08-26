// ==UserScript==
// @name         Donald B Austin (tm)
// @namespace    http://tampermonkey.net/
// @version      2024-08-26
// @description  makes the PAUSD ClassLink and Schoology Don Austin themed
// @author       Graeme Kieran
// @match        https://launchpad.classlink.com/pausd*
// @match        https://myapps.classlink.com/*
// @match        https://pausd.schoology.com/*
// @icon         https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1677032658/pausdorg/p3ltmu5sixxklfbi87av/Don.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const donAsBase64 = "data:image/jpeg;base64,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";

    function replaceImgsWithDonny() {
        const images = document.getElementsByTagName("img");
        Array.from(images).forEach(image => {
            image.src = donAsBase64;
            image.style.height = "100px";
            image.style.width = "50px"
        })
    }
    if (window.location.href.includes("launchpad.classlink.com")) {
        //nuke all stock CSS
        const head = document.getElementsByTagName('head')[0];
        const elements = head.querySelectorAll('link[rel="stylesheet"], style');
        elements.forEach(element => {
            element.remove();
        });

        //remove useless shit that looks bad
        const useless_shit = [".navbar", ".footer", ".lp-login-footer", ".sign-in-services", ".social-link", ".bottom", ".show-password"];
        useless_shit.forEach(shit => {
            let smallershits = document.querySelectorAll(shit);
            smallershits.forEach(smallerShit => {
                smallerShit.remove();
            })

        });

        //minor ui styling and stuff
        document.getElementsByClassName("login")[0].insertAdjacentHTML('beforebegin', '<h1>login</h1>');
        document.getElementById("signin").innerText = "login";
        const usernameContainer = document.getElementsByClassName("username-container")[0];
        const passwordContainer = document.getElementsByClassName("password-container")[0];
        usernameContainer.style.width = "350px";
        usernameContainer.style.display = "flex";
        usernameContainer.style.flexDirection = "column-reverse";

        passwordContainer.style.display = "flex";
        passwordContainer.style.width = "350px";
        passwordContainer.style.flexDirection = "column-reverse";
        passwordContainer.style.marginBottom = "10px";

        document.getElementById("username").style.padding = "5px"
        document.getElementById("password").style.padding = "5px"
        //add our lord and savior don austin
        const pausd_image = `<img style="aspect-ratio: 1" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fschoolnewsrollcall.com%2Fwp-content%2Fuploads%2F2022%2F09%2FPalo-alto.jpg&f=1&nofb=1&ipt=941d97639eb9c380b90f36cd9da543cbdf083368aa778abaa478ff13bc671b33&ipo=images"></img>`
        const donny_image = `<img style="aspect-ratio: 0.5" src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1677032658/pausdorg/p3ltmu5sixxklfbi87av/Don.jpg"></img>`
        const formatted = `
        <div style="height: 200px; display: flex; flex-direction: row">${pausd_image} ${donny_image}</div>
        `
        document.getElementsByClassName("login")[0].insertAdjacentHTML('afterbegin', formatted)

    }
    if (window.location.href.includes("myapps.classlink.com")) {
        const appContainer = document.querySelector('app-apps-container');
        if (appContainer) {
            replaceImgsWithDonny();
        } else {
            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    if (mutation.addedNodes) {
                        const targetElement = Array.from(mutation.addedNodes).find(node => node.tagName === 'APP-APPS-CONTAINER');
                        if (targetElement) {
                            observer.disconnect();
                            replaceImgsWithDonny();
                        }
                    }
                });
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }
    if (window.location.href.includes("pausd.schoology.com")) {
        const injected = `

img {
  content: url("https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1677032658/pausdorg/p3ltmu5sixxklfbi87av/Don.jpg") !important;
}
.Card-card-image-uV6Bu {
  background-image: url("https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1677032658/pausdorg/p3ltmu5sixxklfbi87av/Don.jpg") !important;
  background-size:contain; !important;
  background-repeat:repeat-x; !important
}

       `
        const style = document.createElement("style");
        style.innerHTML = injected;
        document.getElementsByTagName("head")[0].insertAdjacentElement('beforeend', style)
    }

})();
