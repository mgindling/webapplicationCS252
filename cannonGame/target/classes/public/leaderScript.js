// Creates the leaderboard from the gotten user variables
function createLeaderBoard(response) {
    document.getElementById("debug").innerHTML = response;
}

// Makes an HHTP request for the user variables
function getHTTP() {
    const HTTP = new XMLHttpRequest();
    const URL = "givemestats";

    HTTP.onreadystatechange = function () {
        if (HTTP.readyState === 4) {
            createLeaderBoard(HTTP.response);
        }
    }

    HTTP.open("GET", URL);
    HTTP.send(null);
}