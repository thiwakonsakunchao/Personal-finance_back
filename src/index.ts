import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import financailRecordRouter from "./routes/financial-records"
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;
// Load environment variables from the .env file
dotenv.config();

app.use(express.json());
app.use(cors());


const mongoURI = process.env.MONGODB_URL;

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) => console.log("Failed to Connect to MongoDB:", err))

app.use("/financial-records", financailRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})