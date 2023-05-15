//const product = require ("../models/product")
//const {Product,Category} = require("../database/models")

module.exports = {
    index: async(req,res) =>{
        try { 
            return res.render("home")
        } catch (error) {
            res.send(error)
        }
    },
}