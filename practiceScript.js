var currentgravity = -9.8;

/* Performs the main calculator function */
function calculateArc() {
    var angle = document.getElementById("angle").value;
    var power = document.getElementById("power").value;
    var isCorrect = false;

    /* Error checks the angle input box */
    if (isNaN(angle)) {
        document.getElementById("angle").value = "Angle not valid!";
        isCorrect = true;
    }
    if (Number(angle) < 0) {
        document.getElementById("angle").value = "Angle too small!";
        isCorrect = true;
    }
    if (Number(angle) > 90) {
        document.getElementById("angle").value = "Angle too large!";
        isCorrect = true;
    }

    /* Error checks the power input box */
    if (isNaN(power)) {
        document.getElementById("power").value = "Power not valid!";
        isCorrect = true;
    }
    if (Number(power) < 0) {
        document.getElementById("power").value = "Power too small!";
        isCorrect = true;
    }

    if (isCorrect == true) {
        return;
    }
    else {

        /* Calculates the trajectory based on the maths of physics */
        var trajectoryTime = (-2 * power) / (currentgravity);
        var trajectoryDistance = (2 * power * Math.cos(angle * (Math.PI / 180)));
        document.getElementById("shotInformation").innerHTML = "The projectile will stay in the air for " + trajectoryTime.toFixed(2) + " seconds and travel " + trajectoryDistance.toFixed(2) + " meters."

    }
}

/* Changes the picture of the planet on the practice calculator */
function changePlanet(parameter1) {
    if (parameter1 == "mercury") {
        document.getElementById("planet").src = "Resources/mercury.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -3.7;

    }
    else if (parameter1 == "venus") {
        document.getElementById("planet").src = "Resources/venus.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -8.9;

    }
    else if (parameter1 == "earth") {
        document.getElementById("planet").src = "Resources/earth.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -9.8;
    }
    else if (parameter1 == "mars") {
        document.getElementById("planet").src = "Resources/mars.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -3.7;
    }
    else if (parameter1 == "jupiter") {
        document.getElementById("planet").src = "Resources/jupiter.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -24.8;

    }
    else if (parameter1 == "saturn") {
        document.getElementById("planet").src = "Resources/saturn.png";
        document.getElementById("planet").height = 70;
        document.getElementById("imgCol").style.marginTop = '40px';
        currentgravity = -10.4;
    }
    else if (parameter1 == "uranus") {
        document.getElementById("planet").src = "Resources/uranus.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -8.9;
    }
    else if (parameter1 == "neptune") {
        document.getElementById("planet").src = "Resources/neptune.png";
        document.getElementById("planet").height = 130;
        document.getElementById("imgCol").style.marginTop = '0px';
        currentgravity = -11.2;
    }
}

/* Clears the text in the input box */
function clearInput(parameter1) {
    var name = parameter1;

    if (name == "angle") {
        if (isNaN(document.getElementById("angle").value)) { 
            document.getElementById("angle").value = "";
        }
    }

    if (name == "power") {
        if (isNaN(document.getElementById("power").value)) {
            document.getElementById("power").value = "";
        }
    }
}