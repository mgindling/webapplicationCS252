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
    if (angle == "") {
        document.getElementById("angle").value = "No angle entered!";
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
    if (power == "") {
        document.getElementById("power").value = "No power entered!";
        isCorrect = true;
    }

    if (isCorrect == true) {
        return;
    }
    else {

        /* Sets global variables so the graph can work. */
        currentangle = angle;
        currentpower = power;

        /* Calculates the trajectory based on the maths of physics */
        var trajectoryTime = (-2 * power * Math.sin(angle * (Math.PI / 180))) / (currentgravity);
        var trajectoryDistance = (Math.pow(power, 2) * Math.sin(2 * angle * (Math.PI / 180))) / (-1 * currentgravity);
        document.getElementById("shotInformation").innerHTML = "The projectile will stay in the air for " + trajectoryTime.toFixed(2) + " seconds and travel " + trajectoryDistance.toFixed(2) + " meters."

        /* Sets another global variable for the graph. */
        currentdistance = trajectoryDistance;
        drawGraph();

        /* Here the script will have to check and see if the arc hits the target. */
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
