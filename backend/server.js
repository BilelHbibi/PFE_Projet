import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

//connect to mongodb
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (error) {
    console.log("MongoDB database is failed connect");
  }
};

app.use("/api/users", usersRoute);

app.listen(port, () => {
  connectDB();
  console.log("server is running " + port);
});
