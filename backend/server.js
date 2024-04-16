import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";
import productsRoute from "./routes/productsRoute.js";
import bidsRoute from "./routes/bidsRoute.js";
import notificationsRoute from "./routes/notificationsRoute.js";



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
    console.log("MongoDB connection error:", error); // Ajout de cette ligne
  }
};
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/bids", bidsRoute);
app.use("/api/notifications", notificationsRoute);


app.listen(port, () => {
  connectDB();
  console.log("server is running " + port);
});
