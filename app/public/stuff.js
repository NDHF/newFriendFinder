app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.get("/api/existingCandidates", function (req, res) {
    return res.json(existingCandidates);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});