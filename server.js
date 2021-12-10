const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
app.use(cors());
app.get('/recipes', ((req,res) => {
    const ans = {data : "hi"};
    request("https://api.spoonacular.com/recipes/random?number=50&tags=vegetarian&apiKey=47242777d85d408c98ebad231dfb9bae",((err,response,body) => {
        console.log(body);
        res.send(body);
    }));
}))
app.get('/specificrecipe/:id', ((req,res) => {
    const recipeId = req.params["id"];
    const url = "https://api.spoonacular.com/recipes/informationBulk?ids=" + recipeId + "&apiKey=47242777d85d408c98ebad231dfb9bae";//47242777d85d408c98ebad231dfb9bae
    //3bca68f1b48a4784b49e08ac9dc80e47
    //4e8dae514b484fa6a35cbd4a46a63a17
    console.log(url);
    request(url, ((err,response,body) => {
        res.send(body);
    }))
}))
app.listen(8080);