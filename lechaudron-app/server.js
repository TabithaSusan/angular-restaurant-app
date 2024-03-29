
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
app.use(express.static(path.join(__dirname, '/dist/lechaudron-app/browser')));

 // listen (start app with node server.js) ======================================
app.listen(8080, function(){
     console.log("App listening on port 8080");
});

 // application -------------------------------------------------------------
app.get('/', function(req,res)
{
      //res.send("Hello World123");
      res.sendFile('index.html', { root: __dirname+'/dist/lechaudron-app/browser' });
});

app.get('/gericht', function(req,res) {
  var con = mysql.createConnection({
      database: "22_IT_Gruppe1",
      host: "195.37.176.178",
      user: "22_IT_Grp_1",
      password: "WS<M]7{WQMlsDSkK]ZQH",
   });
   con.connect(function(err) {
      if(error) throw error;
      console.log("Connected");

      con.query("SELECT * FROM gericht",
      function(error, results, fields){
          if(error) throw error;
          console.log(results);
          res.send(results);

          con.end(function(err)
          {
              if(error) throw error;
              console.log("Disconnected");
          })
      }
      )
   })
  })


  app.get('/raum', function(req,res) {
    var con = mysql.createConnection({
        database: "22_IT_Gruppe1",
        host: "195.37.176.178",
        user: "22_IT_Grp_1",
        password: "WS<M]7{WQMlsDSkK]ZQH",
     });
     con.connect(function(err) {
        if(error) throw error;
        console.log("Connected");
  
        con.query("SELECT * FROM raum",
        function(error, results, fields){
            if(error) throw error;
            console.log(results);
            res.send(results);
  
            con.end(function(err)
            {
                if(error) throw error;
                console.log("Disconnected");
            })
        }
        )
     })
    })
