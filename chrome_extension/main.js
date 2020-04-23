(function() {

    ELEMENT_ID = "thx_1138"
    DISPLAY_TEXT = "You are on mute"
    ARIA_LABEL = "microphone"
    DATA_ATTRIBUTE = "[data-is-muted=true]"

    function muted() {
        var microphone_muted = false;
        var elements = document.querySelectorAll(DATA_ATTRIBUTE)
        for (var i = 0; i < elements.length; i++) {
            microphone_muted = elements[i].getAttribute("aria-label").includes(ARIA_LABEL);
            break;
        }
        return microphone_muted
    }

    function addElement() {
        if (!document.getElementById(ELEMENT_ID)) {
            var info_element = document.createElement("DIV");
            info_element.setAttribute("id", ELEMENT_ID);
            info_element.innerHTML = DISPLAY_TEXT;
            document.body.prepend(info_element);
        }
    }

    function removeElement() {
        if (document.getElementById(ELEMENT_ID)) {
            document.getElementById(ELEMENT_ID).outerHTML = "";
        }
    }

    function checkState() {
        if (muted()) {
            addElement();
        } else {
            removeElement();
        }
    }
    setInterval(checkState, 300);
}());
