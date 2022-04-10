const jokeController = require ("../server/controllers/jokes.controller");

module.exports = app =>{

    app.post("/api/bromas/new",jokeController.createNewBroma);
    app.get("/api/bromas",jokeController.findAllBromas);
    app.get("/api/bromas/:id",jokeController.findOneBroma);
    app.put("/api/bromas/update/:id",jokeController.updateBroma);
    app.delete("/api/bromas/delete/:id",jokeController.deleteBroma);

}