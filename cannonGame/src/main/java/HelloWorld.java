import io.javalin.Javalin;

public class HelloWorld {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(7000);
        app.get("/", ctx -> ctx.result("Hello World"));
        app.get("/test", ctx -> ctx.result("This is a test of the getter"));
        app.get("/game", ctx -> ctx.html("<body>\n" +
                "\n" +
                "    <!-- Headings for the Web Application -->\n" +
                "    <h1>CS 25200 Lab 6 Web Application</h1>\n" +
                "    <h2>Trajectory Practice</h2>\n" +
                "\n" +
                "    <div class=\"application\">\n" +
                "        \n" +
                "        <!-- Contains the input text for the application as well as the graphs when they are produced. -->\n" +
                "        <div class=\"calculatorMain\">\n" +
                "            <img src=\"Resources/Sample graph.png\" alt=\"Sample Graph\" width=\"500\" height=\"300\" />\n" +
                "            <p id=\"shotInformation\">The projectile will stay in the air for 0.00 seconds and travel 0.00 meters.</p>\n" +
                "            <p>Enter the angle: <input type=\"text\" style=\"margin-left: 20px;\" id=\"angle\" /> degrees</p>\n" +
                "            <p>Enter the power: <input type=\"text\" style=\"margin-left: 14px;\" id=\"power\" /> meters per second</p>\n" +
                "        </div>\n" +
                "\n" +
                "        <!-- Contains a picture of the planet that gravity has been selected for-->\n" +
                "        <div class=\"imgColumn\" id=\"imgCol\">\n" +
                "            <img src=\"Resources/earth.png\" alt=\"Selected Gravity Planet\" width=\"130\" height=\"130\" id=\"planet\" />\n" +
                "        </div>\n" +
                "\n" +
                "        <!-- Contains the different gravity options for the calculator -->\n" +
                "        <div class=\"buttonList\">\n" +
                "            <p>Select your gravity:</p>\n" +
                "            <ul>\n" +
                "                <li><button onclick=\"changePlanet('mercury')\">Mercury</button></li>\n" +
                "                <li><button onclick=\"changePlanet('venus')\">Venus</button></li>\n" +
                "                <li><button onclick=\"changePlanet('earth')\">Earth</button></li>\n" +
                "                <li><button onclick=\"changePlanet('mars')\">Mars</button></li>\n" +
                "                <li><button onclick=\"changePlanet('jupiter')\">Jupiter</button></li>\n" +
                "                <li><button onclick=\"changePlanet('saturn')\">Saturn</button></li>\n" +
                "                <li><button onclick=\"changePlanet('uranus')\">Uranus</button></li>\n" +
                "                <li><button onclick=\"changePlanet('neptune')\">Neptune</button></li>\n" +
                "            </ul>\n" +
                "        </div>\n" +
                "\n" +
                "        <!-- This is the button that will eventually have to run the script when pressed -->\n" +
                "        <div class=\"calculate\">\n" +
                "            <button onclick=\"calculateArc()\">Calculate</button>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <!-- This section contains the text after the web application as well as the button that takes the user to the actual game -->\n" +
                "    <div class=\"playGame\">\n" +
                "        <p>Practice your trajectory skills here, before you head into the fray of combat. Make sure to play with different angles, power levels, and gravity settings. When you are ready, click the button below to play.</p>\n" +
                "        <!-- Visual Studio gives a warning for the line below but the button still works as intended -->\n" +
                "        <a href=\"Application Game.html\"><button>Play!</button></a>\n" +
                "    </div>\n" +
                "\n" +
                "    <!-- This section constructs the footer of the website -->\n" +
                "    <div class=\"footerBody\">\n" +
                "        <div class=\"footer\">\n" +
                "            <div class=\"potato\">\n" +
                "                <img src=\"Resources/potat.png\" alt=\"Potato Tech\" width=\"85\" height=\"65\" />\n" +
                "            </div>\n" +
                "            <div class=\"splash\">\n" +
                "                <h3><i>Powered by <br />Potato Technology</i></h3>\n" +
                "            </div>\n" +
                "            <div class=\"credits\">\n" +
                "                <h3>Built by Mark Gindling and Keon Gorge for CS 25200, Purdue University, April 2019</h3>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    \n" +
                "</body>"));
    }
}
