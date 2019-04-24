/* Draws the graph: Code Adapted from open source on https://mathjs.org/examples/browser/plot.html.html */

// This is declared here so my browser doesn't yell at me
var currentgravity = -9.8;
var currentpower = 0;
var currentangle = 0;
var currentdistance = 0;
var intersect_target = false;
var currentX = (Math.random() * 401) + 50;
var currentY = (Math.random() * 25) + 151;
var redraw = false;
var newpoint = false;
var username = "";

function draw() {
    try {

        // Sets a new random point if that needs to be done.
        if (newpoint == true) {
            currentX = (Math.random() * 401) + 50;
            currentY = (Math.random() * 25) + 151;
            newpoint = false;
        }

        // The gravity level should still be a thing because that's just how Javascript rolls.
        // The equation is y = h - 4.9 ( (x) / (v * cos(a * pi/180)) )^2 + tan(a * pi/180) * x
        // where h = 0 and v, a are set by the user (and pi is pi).

        // Constructs the equation.
        var equation = "y = ((1/2)(" + currentgravity + ")) * (x / (" + currentpower + " * cos(" + currentangle + " * pi/180)))^2 + tan(" + currentangle + " * pi/180) * x";

        // Compiles the expression (the graph is drawn recursively, I believe)
        const compiledEquation = math.compile(equation);

        // Evaluates the expression repeatedly for different values of x. This is based on the distance calculated earlier
        var end; // Holds the end of the range of calculation (the beginning is always 0)
        if (currentdistance >= 499.75) {
            end = 500;            
        }
        else {
            end = currentdistance + .25;
        }

        // Sets the x-values for the functions and then maps the y-values.
        const xValues = math.range(0, end, 0.25).toArray();
        const yValues = xValues.map(function (x) { return compiledEquation.eval({ x: x }) });

        // Creates the data for the graph using plotly.js
        const trace1 = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            name: 'Your Shot'
        };

        const trace2 = {
            x: [400],
            y: [40],
            type: 'scatter',
            name: 'Target'
        };

        const trace3 = {
            x: [currentX],
            y: [currentY],
            type: 'scatter',
            name: 'Target'
        }
       
        // Creates the style for the graph using plotly.js
        var layout = {
            xaxis: { range: [0, 500] },
            yaxis: { range: [0, 200] }
        };

        // Checks to see if the graph hit the target
        if (gameActive == false) {

            // The check for the practice round is basically hardcoded.
            if (yValues.length - 1 >= 1600) {
                if (yValues[1600] > 38 && yValues[1600] < 42) {
                    intersect_target = true;
                }
                else {
                    intersect_target = false;
                }
            }
            else {
                intersect_target = false;
            }

        }
        else {

            // The check for the practice round needs to be more dynamic
            var check_position = (currentX * 4).toFixed(0);
            if (yValues.length - 1 >= check_position) {
                if (yValues[check_position] > currentY - 5 && yValues[check_position] < currentY + 5) {
                    intersect_target = true;
                }
                else {
                    intersect_target = false;
                }
            }
            else {
                intersect_target = false;
            }

        }

        if (redraw == true) {
            const data = [trace1, trace3];
            Plotly.newPlot('plot', data, layout);
            redraw = false;
            return;
        }

        // Draws the graph depending on what game type is active
        if (gameActive == false) {
            const data = [trace1, trace2];
            Plotly.newPlot('plot', data, layout);
        }
        else {
            const data = [trace1, trace3];
            Plotly.newPlot('plot', data, layout);
            document.getElementById("targetInfo").innerHTML = "Target: (" + currentX.toFixed(2) + ", " + currentY.toFixed(2) + ")";

            // Sends a post request to the server to have it update the score.
            var POSTMAN = new XMLHttpRequest();
            var URL = username + "|" + intersect_target;
            POSTMAN.open("POST", URL);
            POSTMAN.send(null);
        }
    }
    catch (err) {
        console.error(err);
        alert(err);
    }
}

// What will be called originally.
function drawGraph() {
    event.preventDefault();
    draw();
}

// I have no idea what this does but it should make the program work.
draw()