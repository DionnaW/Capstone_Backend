import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.Mongo_URI;
const db = mongoose.connection;

//connection to MongoDB Cloud
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');          //using this to show when it's connected to mongo
});

export default db;