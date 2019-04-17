var currentgravity = -9.8;

function calculateArc() {
    var angle = document.getElementById("angle").value;
    var power = document.getElementById("power").value;

    /*  -- Calculates the trajectory based on the formula y = (2 * p * cos(a) * sin(a)) / g --  */

    var trajectory = (2 * power * Math.cos(angle) * Math.sin(angle)) / currentgravity;
    document.getElementById("shotInformation").innerHTML = "The projectile will stay in the air for 0.00 seconds and travel " + trajectory.toFixed(2) + " meters."
}

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