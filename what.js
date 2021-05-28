// ==UserScript==
// @name         VK Left Menu Editor
// @namespace    https://vk.com/
// @version      1.0
// @description  Цыганские фокусы
// @author       cipherka
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#l_pr').children[0].children[1].innerText = 'Твой профиль';
    $('#l_nwsf').children[0].children[1].innerText = 'Артемий Лебедев';
    $('#l_msg').children[0].children[1].innerText = 'WhatsApp';
    $('#l_fr').children[0].children[1].innerText = 'Getcontact';
    if($('#l_aud')) $('#l_aud').children[0].children[1].innerText = 'Spotify';
})();
