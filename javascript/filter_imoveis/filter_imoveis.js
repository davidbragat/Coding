'use strict';

let rgx = function regexProtocol() {
    let matchTextRgx = /(Imóvel localizado:.)(.*)+/gm;
    let cleanTextRgx = /(Imóvel localizado:.)/gm;

    let trashText = document.querySelector('#trash_text').value;
    let protocolList = document.querySelector('#protocol_list');

    let textCleaned = trashText.match(matchTextRgx).toString().replace(cleanTextRgx, '<br/>');

    protocolList.innerHTML = textCleaned;
};
