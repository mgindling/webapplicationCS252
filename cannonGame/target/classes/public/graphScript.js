/* Draws the graph: Code Adapted from open source on https://mathjs.org/examples/browser/plot.html.html */

// This is declared here so my browser doesn't yell at me
var currentgravity = -9.8;
var currentpower = 0;
var currentangle = 0;
var currentdistance = 0;

function draw() {
    try {

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
            type: 'scatter'
        };

        // Creates the style for the graph using plotly.js
        var layout = {
            xaxis: { range: [0, 500] },
            yaxis: { range: [0, 75] }
        };

        const data = [trace1];
        Plotly.newPlot('plot', data, layout);
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