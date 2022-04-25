const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sanua*123",
  database: "authentication",
});

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const query = "select * from users where user_name=? and password=?";
  db.query(query, [userName, password], (err, result) => {
    if (err) console.log(err);
    if (result.length > 0) {
      res.status(200).send("login successful");
    } else {
      res.send("login failed");
    }
  });
});

app.post("/signup", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const query = "insert into users (user_name, password) values(?,?)";
  db.query(query, [userName, password], (err) => {
    if (err) console.log(err);
    res.status(200).send("Sign up succesful");
  });
});

app.listen(8008, () => {
  console.log("server started on 8008");
});
