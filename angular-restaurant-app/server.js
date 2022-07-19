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
 app.use(express.static(path.join(__dirname, '/dist/angular-restaurant-app')));

 // listen (start app with node server.js) ======================================
 app.listen(8080, function() {
     console.log("App listening on port 8080");
 });

 // application -------------------------------------------------------------
 app.get('/', function(req, res) {
     //res.send("Hello World123");
     res.sendFile('index.html', { root: __dirname + '/dist/angular-restaurant-app' });
 });

 app.get(' /test', function(req, res) {

     var con = mysql.createConnection({
         database: "22_IT_Gruppe1",
         host: "195.37.176.178",
         user: "22_IT_Grp_1",
         password: "WS<M]7{WQMlsDSkK]ZQH",
      });
      

      // IMPORTANT! Before executing this or any other SQL that involves user input, such as reservations, customer information, etc., you need to
      // validate the input first and clean the input against SQL Injection. At least bring this up in the presentation that the completed code
      // will validate all input and before it is sent to the server. Again, this is totally INSECURE as the data can be manipulated.
      // The following is at least helpful as it escapes the input to help provide against injections. It can, unfortunately, still be
      // manipulated by a user before the information is sent to the server (see above)

      con.connect(function(err){
            if(err) throw err;
            console.log("Connected");
            // Invalid UPDATE SQL, "UPDATE kunden SET xxx = ?? WHERE id = ??";
            con.query(
               'UPDATE kunden SET nachname=?, vorname=?, adresse=?, telefon=? WHERE id=?',
               [body.nachname, body.vorname, body.adresse, body.telefon, body.id],
                function(error,results,fields){
                  if(error) throw error;

                  console.log(results);
                  res.send(results);

                  con.end(function(err){
                        if(err) throw err;
                        console.log("Disconected");
                });
            /*
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
            */
      })
     res.send("HelloWorld");
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
        // Suggestion: Add an order by statement to the item below to assist in setting up the page
        // Example: 'SELECT * FROM Gericht ORDER BY name'
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

 })})
