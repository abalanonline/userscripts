// ==UserScript==
// @name         Cube
// @version      1.0
// @description  test
// @match        https://ca.yahoo.com/
// ==/UserScript==

(function() {
    'use strict';
    var button = document.createElement("div");
    button.innerHTML += 'Not in cruelty, Not in wrath, The REAPER came today, An ANGEL visited this gray path, And took the cube away';
    button.style.fontSize = "13pt";
    document.getElementById("module-ntk").appendChild(button);
})();
