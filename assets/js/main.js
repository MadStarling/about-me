"use strict";

const WRITE_SPEED = 130;
function writeAndAnswer(value, element, i, callback) {
    if (i < value.length) {
        element.innerHTML += value.charAt(i);
        i++;
        setTimeout(writeAndAnswer.bind(null, value, element, i, null), WRITE_SPEED);
    } else {
        element.nextElementSibling.style.display = 'initial';
        
        if(element.nextElementSibling.nextElementSibling.nextElementSibling == null) {
            blink(document.getElementById('current-cursor'));
        }
    }
}

function writeAllElements(typeToElementsId, j) {
    if (j < Object.keys(typeToElementsId).length) {
        let id = Object.keys(typeToElementsId)[j];
        let value = typeToElementsId[id];
        let currentElement = document.getElementById(id);
        writeAndAnswer(value, currentElement, 0);
        j++;
        setTimeout(writeAllElements.bind(null, typeToElementsId, j), value.length * WRITE_SPEED);
    }
}

function blink(cursorElement) {
    if (cursorElement.style.display === 'none')
        cursorElement.style.display = 'inline';
    else
        cursorElement.style.display = 'none';


    setTimeout(blink.bind(null, cursorElement), 500);
}

window.onload = function () {
    let typeToElementsId = {
        'whoami': 'whoami',
        'resume': 'show resume',
        'contact': 'show contact',
    };

    writeAllElements(typeToElementsId, 0);
};
