'use strict';

let filterProtocolo = function regexProtocol() {
    let cleanTextRgx = /([A-ZÀ-üa-z\s\.\,\-\;\/]|\d{2}\/\d{2}\/\d{4})/gm;
    let splitProtocol = /(\d{13})/gm;
    let trashText = document.querySelector('#trash_text').value;
    let protocolList = document.querySelector('#protocol_list');

    let textCleaned = trashText.replace(cleanTextRgx, '').replace(splitProtocol, '$1<br/>');
    protocolList.innerHTML = textCleaned;
};

let filterProperty = function regexProperty() {
    let matchTextRgx = /(Imóvel localizado:.)(.*)+/gm;
    let cleanTextRgx = /(Imóvel localizado:.)/gm;

    let trashText = document.querySelector('#trash_text').value;
    let protocolList = document.querySelector('#protocol_list');

    let textCleaned = trashText.match(matchTextRgx).toString().replace(cleanTextRgx, '<br/>');

    protocolList.innerHTML = textCleaned;
};

let cleanText = () => (document.querySelector('#trash_text').value = '');
