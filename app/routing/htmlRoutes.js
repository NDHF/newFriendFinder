// HTMLROUTES.JS

// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. DONE

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

// app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });