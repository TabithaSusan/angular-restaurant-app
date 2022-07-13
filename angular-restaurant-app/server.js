 // set up ======================== 
var express  = require('express'); 
var app      = express();                               // create our app w/ express 
var path     = require('path'); 
var mysql    = require('mysql'); 
 
bodyParser = require('body-parser');


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

 // configuration =================
app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app')));  //TODO rename to your app-name
 
 // listen (start app with node server.js) ======================================
app.listen(8080, function(){    
     console.log("App listening on port 8080");
});

 // application -------------------------------------------------------------
app.get('/', function(req,res) 
{     
      //res.send("Hello World123");     
      res.sendFile('index.html', { root: __dirname+'/dist/my-new-angular-app' });    //TODO rename to your app-name
});

app.get(' /test', function(req,res){
      var con = mysql.createConnection({
            database: "22_IT_Gruppe1",
            host: "195.37.176.178",
            user: "test",
            password: "",
});

      res.send("HelloWorld")
});

