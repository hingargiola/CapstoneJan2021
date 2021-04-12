const express = require("express");
const mongoose = require("mongoose");
const movement = require("./routers/movement")

const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(express.json());
app.use(logging);
app.use(cors);
app.use('/movement', movement);

mongoose.connect("mongodb+srv://hingargiola:Abcd814831722@cluster0.crmia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection;

let db_status = "MongoDB connection not successful.";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection to Mongo!"));

// const frenchBreadSchema = new mongoose.Schema({
//   monday: Number,
//   tuesday: Number,
//   wednesday: Number,
//   thursday: Number,
//   friday: Number,
//   saturday: Number,
//   sunday: Number
// });

// const FrenchBread = mongoose.model('frenchBread', frenchBreadSchema)

// app.post("frenchBread", (request, response) => {
//   const newFrenchBread = new FrenchBread(request.body);
//   new FrenchBread.save((err, data) => {
//     return err ? response.sendStatus(500).json(err) : response.json(data);
//   });
// });

// app.get("/frenchBread", (request, response) => {
//   FrenchBread.find({}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

app.route("/").get((request, response) => {
  response.send("HELLO WORLD");
});

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service running ok" }));
});

app
  .route("/posts")
  .get((request, response) => {
    // express adds a "params" Object to requests
    const id = request.params.id;
    let data = "The ID equals " + id;
    // handle GET request for post with an id of "id"
    if (request.query) {
      if (request.query.type) {
        if (request.query.type === "json") {
          data = { id: request.params.id, q: request.query };
        }
      }
    }
    response.status(418).json(data);
  })
  .post((request, response) => {
    response.json(request);
  });

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
