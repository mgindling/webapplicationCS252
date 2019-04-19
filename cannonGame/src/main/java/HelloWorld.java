import io.javalin.Context;
import io.javalin.Javalin;
import io.javalin.staticfiles.Location;

import java.io.File;
import java.io.FileInputStream;

public class HelloWorld {
    public static class Score {
        public String name = "Test";
        public int score = 4;
    }

    public void saveScore(Context ctx) {
        Score s = ctx.bodyAsClass(Score.class);
        System.out.println(ctx.queryParam("user"));
        s.score++;
        ctx.json(s);
    }

    public static void main(String[] args) {
        Javalin app = Javalin
                .create()
                //.enableStaticFiles("/public")
                .enableStaticFiles("../", Location.EXTERNAL)
                .start(7000);

        HelloWorld handler = new HelloWorld();
        app.get("/test", ctx -> ctx.result("This is a test of the getter"));
        app.get("/api/calculate-score", ctx -> ctx.json(new Score()));
        app.post("/api/save-score", handler::saveScore);

        app.get("/api/:username/info", ctx -> {

            ctx.json(ctx.pathParam("username"));
        });

        app.get("/test.html", ctx -> {
            ctx.header("content-type", "text/html");
            ctx.result(new FileInputStream(new File("../index.html")));
        });
    }
}
