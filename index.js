var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var dbroute = require("./server/routes/dbroutes");

app.use(express.static(path.join(__dirname, "public/styles")));
app.use(express.static(path.join(__dirname, "public/scripts")));
app.use(express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(bodyParser.urlencoded());
//bodyParser.json
app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "pug");

app.use("/dbops", dbroute);

app.get("/displayppl", (req, resp) => {
  fs.readFile("files/data.json", "utf8", (error, data) => {
    if (error) {
      resp.sendStatus(500);
    } else {
      let person = JSON.parse(data);
      resp.render("person", {
        person1: person,
        developer: "Shirdi Sai Baba"
      });
    }
  });
});

app.listen("4321", function() {
  console.log("Hullo Sai,pls answer my prayers soon");
});

app.get("/images/:filename", (request, response) => {
  response.sendFile(
    path.join(__dirname, "images/") + "/" + request.params.filename
  );
});

app.get("/home", (request, response) => {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/images/:filename", (request, response) => {
  response.sendFile("E:/projectimages/" + request.params.filename);
});

app.get("/showpeople", function(request, response) {
  fs.readFile("files/data.json", "utf8", function(err, data) {
    if (err) response.sendStatus(500);
    else {
      let people = JSON.parse(data);
      response.render("people", { people: people, programmer: "Johnson" });
    }
  });
});

app.post("/storeperson", (request, response) => {
  let sno = request.body.snum;
  let name = request.body.name;
  let city = request.body.town;
  console.log("SNO " + sno);

  fs.readFile("files/data.json", "utf8", function(err, data) {
    if (err) response.sendStatus(500);
    else {
      let people = JSON.parse(data);
      people.push({ sno: sno, name: name, city: city });
      console.log(people);
      fs.writeFile("files/data.json", JSON.stringify(people), function(err) {
        if (err) response.sendStatus(500);
        else response.send("DATA STORED..!!!");
      });
    }
  });
});

app.get("/home", (request, response) => {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/", function(request, response) {
  console.log("Hullo");
  response.send("Sai,you are my only hope");
});

app.get("/driver", function(request, response) {
  response.setHeader("Content-Disposition", "attachment; filename=" + "notes3");
  response.download(path.join(__dirname, "./notes3"));
});

app.post("/storeperson", (request, response) => {
  let snum = request.body.snum;
  let name = request.body.name;
  let town = request.body.town;

  fs.readFile("files/data.json", "utf-8", (err, data) => {
    if (err) {
      response.sendStatus(500);
    } else {
      let person = JSON.parse(data);
      person.push({ snum: snum, name: name, town: town });
      fs.writeFile("files/data.json", JSON.stringify(person), err => {
        if (err) {
          response.sendStatus(500);
        } else {
          response.send("Sai,Data has been stored");
        }
      });
    }
  });
});
