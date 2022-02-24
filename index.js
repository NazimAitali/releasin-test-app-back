const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/productRoutes");
const env = require("dotenv");
env.config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
app.use(cors());

const ATLAS = process.env.atlas;
const LOCAL = process.env.local;
//"mongodb://localhost/RELEASIN-DB"
mongoose.connect(ATLAS, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("DATA BASE LUNCH SUCCESEFULY");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", productRouter);

app.listen(PORT, () => console.log("API RUNNING IN PORT 8080"));
