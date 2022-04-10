const express = require("express");
const app = express();
const port = 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require("./server/config/mongoose.config");
require("./server/jokes.routes")(app);

app.listen( 8080, () => console.log(`Mi puerto esta escuchando: ${port}`) );
