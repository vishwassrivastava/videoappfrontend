import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentsRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app=express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://vishwas:crP98EZjJHsHMBlx@atlascluster.boztb7a.mongodb.net/",
    )
    .then((res) => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users",userRoutes)
app.use("/api/comments",commentsRoutes)
app.use("/api/videos",videoRoutes);
app.use("/api/auth",authRoutes);



app.listen(8800,(req,res)=>{
  connect();
 console.log("connected to server");
})