// ==UserScript==
// @name         MORGENSHTERN
// @namespace    https://vk.com/
// @version      1.0
// @description  Меняет разделу "Музыка" имя на "Моргенштерн". Можно поменять на что-угодно, будь то "Ты Слава Мерлоу?".
// @author       cipherka
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#l_aud').children[0].children[1].innerText = 'Моргенштерн';
})();
