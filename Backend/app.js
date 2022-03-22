const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 


// connection to DB

const PORT = process.env.PORT || '5000'
mongoose
  .connect(
    'mongodb+srv://user01:MjmxfCplpsHI6zrZ@mydatabase.lojjr.mongodb.net/MACHINE_TEST?retryWrites=true&w=majority'
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));


  // Data for Books is copied from 'https://www.goodreads.com/list/show/252.Books_Made_into_Movies' & 'https://www.imdb.com/list/ls020599634/'
