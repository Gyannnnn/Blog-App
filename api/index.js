import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('')

mongoose.connect("mongodb+srv://higyanaranjanpatra:n6MVgElSE4ppFNID@blogapp.h2lirt3.mongodb.net/Blog App?retryWrites=true&w=majority&appName=Blogapp")
.then(() => {
    console.log("Connected to the database...");
    console.log("Database is running fine...");
})
.catch((err) => {
    console.log("Error in database connection");
    console.log(err);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
