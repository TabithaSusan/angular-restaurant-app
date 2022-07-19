// Recommendation: Declare var con once if the connection will be reused repeatedly throughout the script. Ensure to test performance but it should not
// make a significant hit

// Add a new variable that is globally accessible that contains retrieved information that is required app wide, for instance, menu 

// set up ======================== 
 var express = require('express');
 var app = express(); // create our app w/ express 
 var path = require('path');
 var mysql = require('mysql');

// Example variable result holder

 var menu = null;
 var menuFields = null;

const { isFromDtsFile } = require('@angular/compiler-cli/src/ngtsc/util/src/typescript');

 bodyParser = require('body-parser');


 // support parsing of application/json type post data
 app.use(bodyParser.json());

 //support parsing of application/x-www-form-urlencoded post data
 app.use(bodyParser.urlencoded({ extended: true }));

 // configuration =================
 app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app'))); //TODO rename to your app-name

 // listen (start app with node server.js) ======================================
 app.listen(8080, function() {
     console.log("App listening on port 8080");
 });

 // application -------------------------------------------------------------
 app.get('/', function(req, res) {
     //res.send("Hello World123");     
     res.sendFile('index.html', { root: __dirname + '/dist/my-new-angular-app' }); //TODO rename to your app-name
 });

 app.get(' /test', function(req, res) {
     var con = mysql.createConnection({
         database: "22_IT_Gruppe1",
         host: "195.37.176.178",
         user: "22_IT_Grp_1",
         password: "WS<M]7{WQMlsDSkK]ZQH",
      });
      con.connect(function(err)){
            if(err) throw err;
            console.log("Connected");
            // Invalid UPDATE SQL, "UPDATE kunden SET xxx = ?? WHERE id = ??";
            con.query("UPDATE * FROM kunden",
            function(error,results,fields){
                  if(error) throw error;

                  console.log(results);
                  res.send(results);

                  con.end(function(err){
                        if(err) throw err;
                        console.log("Disconected");
                  });
            });
      }
     res.send("HelloWorld")
 });

 app.get(' /gerichte', function(req,res) {
    var con = mysql.createConnection({
        database: "22_IT_Gruppe1",
        host: "195.37.176.178",
        user: "22_IT_Grp_1",
        password: "WS<M]7{WQMlsDSkK]ZQH",
     });
     con.connect(function(err) {
        if(error) throw error;
        console.log("Connected");

        con.query("SELECT * FROM Gericht", 
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
       // After retrieving the data from the server, assign the variable menu the return value so it can be accessed
       // menu = results (not sure what it would be called
       // menuFields = fields
       
       // Trick! add the following line to the code and then set the debug breakpoint on this line
       
       var a = 1;
       
       // When the debugger stops at the breakbpoint, check the values and structure of results and fields to see what it is and how it is built
       // Doing so will let you know how to access the info in your script
     })
    


 })
