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

    function replaceImgsWithDonny() {
        const images = document.getElementsByTagName("img");
        Array.from(images).forEach(image => {
            image.src = "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1677032658/pausdorg/p3ltmu5sixxklfbi87av/Don.jpg";
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
