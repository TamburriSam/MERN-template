//entry point of API

const express = require("express");
const app = express();
const moongoose = require("mongoose");
const UserModel = require("./models/Users.js");
const cors = require("cors");

//if you dont use this middleware-the body of the request wont turn into a json object for you to parse and be able to use the values properly in your DB
app.use(express.json());
app.use(cors());

moongoose.connect(
  "mongodb+srv://tamburrisam:geotracker4ever@cluster0.ki4hp.mongodb.net/mntr_me?retryWrites=true&w=majority"
);
const PORT = 3002;

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUsers", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`server runs on ${PORT}`);
});
