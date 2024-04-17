var total_correct = 0;

function checkAnswersSports() {
    var q1Selected = document.querySelector('input[name="q1"]:checked');
    if (q1Selected && q1Selected.value === "USA") {
        total_correct += 1;
    }

    var q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === "Roger Federer") {
        total_correct += 1;
    }
	var q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === "Alan Shearer") {
        total_correct += 1;
    }

    alert("Total correct: " + total_correct);
	total_correct = 0; // Reset the count if needed
    
}

function checkAnswersFlags() {
    var q1Selected = document.querySelector('input[name="q1"]:checked');
    if (q1Selected && q1Selected.value === "Ivory Coast") {
        total_correct += 1;
    }

    var q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === "Columbia") {
        total_correct += 1;
    }

    var q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === "South Africa") {
        total_correct += 1;
    }

    alert("Total correct: " + total_correct);
    total_correct = 0; // Reset the count if needed
}

function checkAnswersScience() {
    var q1Selected = document.querySelector('input[name="q1"]:checked');
    if (q1Selected && q1Selected.value === "Jupiter") {
        total_correct += 1;
    }

    var q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value === "100 degrees celcius") {
        total_correct += 1;
    }
	var q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === "Iron") {
        total_correct += 1;
    }

    alert("Total correct: " + total_correct);
    total_correct = 0; // Reset the count if needed
}


function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    function changeFontSize(size) {
        let sizeValue;
        switch (size) {
            case 'small':
                sizeValue = '12px';
                break;
            case 'medium':
                sizeValue = '16px';
                break;
            case 'large':
                sizeValue = '20px';
                break;
            default:
                sizeValue = '16px';
        }
        document.body.style.fontSize = sizeValue;
        localStorage.setItem('fontSize', sizeValue);
    }

    // Function to load and apply saved preferences
    function loadPreferences() {
        const savedColor = localStorage.getItem('backgroundColor');
        const savedFontSize = localStorage.getItem('fontSize');

        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
        }

        if (savedFontSize) {
            document.body.style.fontSize = savedFontSize;
        }
    }

    window.onload = loadPreferences;