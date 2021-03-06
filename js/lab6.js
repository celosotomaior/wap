window.onload = function() {
    "use strict";
    // put all of your code here

    const biggerDecorationButton = document.getElementById("biggerDecorationButton");
    biggerDecorationButton.addEventListener("click", function(event) {
        function innerFunction() {
            const textArea = document.getElementById("textAreaId");
            let currentFontSize = textArea.style.fontSize;
            textArea.style.fontSize = currentFontSize === '' ? 14 + "pt" : (parseInt(currentFontSize) + 2) + "pt";
            textArea.style.textAlign = "right";
            textArea.style.paddingRight = "50px";
        }
        setInterval(innerFunction, 500);
    });


    const pigLatinButton = document.getElementById("pigLatinButton");
    pigLatinButton.addEventListener("click", function(event) {
        let textAreaContext = document.getElementById("textAreaId");
        let words = textAreaContext.value.split(' ');
        var regex = /[^aeiouAEIOU]/gi;
        let newValue = '';

        words.forEach((element, index) => {
            if (element[0].match(regex))
                newValue += element.substring(1) + element[0] + "ay";
            else
                newValue += element;

            newValue += index === words.length - 1 ? '' : ' ';
        });

        textAreaContext.value = newValue;
    });

    const malkovitchButton = document.getElementById("malkovitchButton");
    malkovitchButton.addEventListener("click", function(event) {
        let textAreaContext = document.getElementById("textAreaId");
        let words = textAreaContext.value.split(' ');
        let newValue = '';
        words.forEach((element, index) => {
            if (element.length >= 5)
                newValue += `Malkovich`
            else
                newValue += element;

            newValue += index === words.length - 1 ? '' : ' ';
        });
        textAreaContext.value = newValue;

    });

    const blingCheckBox = document.getElementById("blingCheckBox");
    blingCheckBox.addEventListener("change", function(event) {
        const textArea = document.getElementById("textAreaId");
        if (this.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url(../images/tmnt_images/100dollarbill.jpg)";

        } else {
            textArea.style.fontWeight = "";
            textArea.style.color = "";
            textArea.style.textDecoration = "";
            document.body.style.backgroundImage = "";
        }
    });
}