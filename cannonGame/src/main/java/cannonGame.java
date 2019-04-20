import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.FirestoreOptions;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import io.javalin.Context;
import io.javalin.Javalin;
import io.javalin.staticfiles.Location;

import java.io.*;
import java.util.List;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class cannonGame {
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

        // Use a service account
        // Begin connection to the firebase database
        InputStream serviceAccount = null;
        try {
            serviceAccount = new FileInputStream("../cannon-game-a2e42-firebase-adminsdk-39rm8-f95a368b60.json");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("failed to use json private key");
        }
        GoogleCredentials credentials = null;
        try {
            credentials = GoogleCredentials.fromStream(serviceAccount);
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("failed to connect to the google account");
        }
//        FirestoreOptions options0 =
//                FirestoreOptions.newBuilder().setTimestampsInSnapshotsEnabled(true).build();
//        Firestore firestore = options0.getService();


        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(credentials)
                .build();
        FirebaseApp.initializeApp(options);

        Firestore db = FirestoreClient.getFirestore();
        //end connecting to the firebase database


        //begin handling uri requests
        cannonGame handler = new cannonGame();
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

        app.get("/score", ctx -> {
            // asynchronously retrieve all users
            ApiFuture<QuerySnapshot> query = db.collection("users").get();
            // ...
            // query.get() blocks on response
            QuerySnapshot querySnapshot = query.get();
            List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
            System.out.println("All users:\n");
            for (QueryDocumentSnapshot document : documents) {
                ctx.html(document.getId());
            }
        });
    }
}