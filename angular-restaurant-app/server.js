<<<<<<< Updated upstream
// Recommendation: Declare var con once if the connection will be reused repeatedly throughout the script. Ensure to test performance but it should not
// make a significant hit

const con = mysql.createConnection({
   database: "22_IT_Gruppe1",
   host: "195.37.176.178",
   user: "22_IT_Grp_1",
   password: "WS<M]7{WQMlsDSkK]ZQH",
});

// Add a new variable that is globally accessible that contains retrieved information that is required app wide, for instance, menu 

// set up ======================== 
=======
 // set up ========================
>>>>>>> Stashed changes
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
     /*
     var con = mysql.createConnection({
         database: "22_IT_Gruppe1",
         host: "195.37.176.178",
         user: "22_IT_Grp_1",
         password: "WS<M]7{WQMlsDSkK]ZQH",
      });
<<<<<<< Updated upstream
      */
      con.connect(function(err)){
=======
      con.connect(function(err){
>>>>>>> Stashed changes
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
      });
     res.send("HelloWorld");
 });

 app.get(' /gerichte', function(req,res) {
    /*
    var con = mysql.createConnection({
        database: "22_IT_Gruppe1",
        host: "195.37.176.178",
        user: "22_IT_Grp_1",
        password: "WS<M]7{WQMlsDSkK]ZQH",
     });
     */
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
       menu = results; // (not sure what it would be called
       menuFields = fields; // Just to see what the values are, if this is not required delete this and the var call above
       
       // Trick! add the following line to the code and then set the debug breakpoint on this line
       
       // When you open your browser and go to the page, press F12 to open the Development Tools Docker, recommend show docker as separate window
       // Click debugger tab, find the file in the directory tree in the left column, open this file and set a breakpoint on the line below
       // Reload the page
       
       var a = 1;
       
       // When the breakpoint is hit, click Console and type menu and then enter, the object will appear with its values, this is 
       // a great help to understand the values returned and then how to process the data.
       // The data will appear as an array or object
       
       // If results is a string, you will need to parse it, in JavaScript it is JSON.parse(results), thus menu above would be
       
       // menu = JSON.parse(results);
       
       // When the debugger stops at the breakbpoint, check the values and structure of results and fields to see what it is and how it is built
       // Doing so will let you know how to access the info in your script
     })


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
 })
