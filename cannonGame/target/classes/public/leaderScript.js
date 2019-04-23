// Creates the leaderboard from the gotten user variables
function createLeaderBoard(response) {
    document.getElementById("debug").innerHTML = response;

    // Checks if the response is an array (which it should be)
    var responseArray = JSON.parse(response);
    document.getElementById("debug").innerHTML += "<br>" + responseArray;

    if (Array.isArray(responseArray) == true) {
        var players = response.length;
        
        if (players == 0) {
            alert("There is nobody here. It is sad. :(")
        }

        // Since there is no easy way to access the HTML elements with a loop this mess handles displaying the scores.
        var HTML_elements = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

        for (var a = 0; a < players; a++) {
            document.getElementById(HTML_elements[a]).innerHTML = responseArray[a].name + ": " + responseArray[a].score;
        }

    }
    else {
        alert("Sorry, something went wrong. Please try reloading the page.")
    }
}

// Makes an HHTP request for the user variables
function getHTTP() {
    const HTTP = new XMLHttpRequest();
    const URL = "givemestats";

    HTTP.onreadystatechange = function () {
        if (HTTP.readyState === 4) {
            createLeaderBoard(HTTP.responseText)
        }
    }

    HTTP.open("GET", URL);
    HTTP.send(null);
}
