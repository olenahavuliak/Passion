const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/passion', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// mysql connection
var path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var con = mysql.createConnection({
  host: "127.0.0.1",
  port:"3306",
  user: "root",
  password: "m086413o",
  database:'passion'
});

app.post('/submit', function(req, res) {
  var name = req.body.name;
  var gmail = req.body.gmail;
  var telephone = req.body.telephone;
  var message = req.body.message;

  var sql = "INSERT INTO feedback (name, gmail, telephone, message) VALUES ('" + name + "', '" + gmail + "','" + telephone + "', '" + message + "')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect('/back'); // move the redirect inside the callback
  });
});

app.get('/back', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});


app.post('/reserve', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var date = req.body.date;
  var time = req.body.time;
  var guests = req.body.guests;

  var sql = "INSERT INTO reservation (name, email, phone, date, time, guests) VALUES ('" + name + "', '" + email + "','" + phone + "', '" + date + "', '" + time + "', '" + guests + "')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect('/back_reserv'); // move the redirect inside the
  });
});


app.get('/back_reserv', (req, res) => {
  res.sendFile(__dirname + '/public/reservation.html');
});

