const Broma = require("../models/jokes.model");

module.exports.findAllBromas = (req,res) => {
    Broma.find()
        .then((alljokes)=>res.json({bromas:alljokes}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOneBroma = (req,res)=>{
    Broma.findOne({_id: req.params.id})
        .then((jokes)=>res.json({broma:jokes}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.createNewBroma = (req,res)=>{
    Broma.create(req.body)
        .then((newJokes)=>res.json({broma:newJokes}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updateBroma = (req,res)=>{
    Broma.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((jokes)=>res.json({broma:jokes}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deleteBroma = (req,res)=>{
    Broma.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}