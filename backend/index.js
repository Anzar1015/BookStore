import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import register from "./routes/register.js";
import login from "./routes/login.js";
import cors from "cors";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/books", booksRoute);
app.use("/api/register", register);
app.use("/api/login", login);
