const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// app modules
const productRouter = require("./routes/product");

const app = express();

// middlewares
app.use(cors());
app.options("*", cors());
app.use(morgan("tiny"));
app.use(express.json());

//routers
const api = process.env.API_URL;
app.use("/api/v1/tours", productRouter);

// connecting to db
const db = process.env.DB;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`db running on ${db}`))
  .catch((err) => console.error(err));

// connecting to server
const port = process.env.NODE_ENV || 3000;
const localhost = "localhost";
app.listen(port, localhost, () => console.log(`server runing on ${port}`));
