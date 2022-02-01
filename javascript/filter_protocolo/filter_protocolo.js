'use strict';

let rgx = function regexProtocol() {
    let cleanTextRgx = /([A-ZÀ-üa-z\s\.,-]|\d{2}\/\d{2}\/\d{4})/gm;
    let splitProtocol = /(\d{13})/gm;
    let trashText = document.querySelector('#trash_text').value;
    let protocolList = document.querySelector('#protocol_list');

    let textCleaned = trashText.replace(cleanTextRgx, '').replace(splitProtocol, '$1<br/>');
    protocolList.innerHTML = textCleaned;
};
