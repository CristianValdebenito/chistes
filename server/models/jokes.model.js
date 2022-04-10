const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        minlength: [10, 'El enunciado no puede tener menos de 10 caracteres']
    },
    punchline:{
        type: String,
        minlength: [3, 'El remate no puede tener menos de 3 caracteres']
    }
});

const Broma = mongoose.model("Broma",JokeSchema);

module.exports = Broma;