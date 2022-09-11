const express = require("express")
const bodyParser = require("body-parser");
const weather = require("openweather-apis");


const app = express();


app.set('view engine', 'ejs');

app.use(express.static("Public")); 
app.use(bodyParser.urlencoded({extended: true}))




 

app.get("/", function(req,res)
{
    res.render('index',{temp:null});
})


app.post('/', function(req,res)
{
    weather.setLang("en");
    weather.setCity(req.body.cityName)
    weather.setAPPID("39c6a0848b0f6ec9859d0387ce1bd28f");
    weather.getAllWeather(function(err,temp)
    {
        res.render('index',{temp:temp})
    })
})


app.listen(3000,function()
{
    console.log("Server started on port 3000");
})