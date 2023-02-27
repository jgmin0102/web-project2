app.get("/get", (req, res) => {
    console.log(req.query);
    });
    
    app.post("/post", (req, res) => {
    console.log(req.body);
    });