import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';



const app = express();

mongoose.connect('mongodb+srv://higyanaranjanpatra:n6MVgElSE4ppFNID@blogapp.h2lirt3.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Blogapp')
.then(() => {
    console.log("Connected to the database...");
    console.log("Database is running fine...");
})
.catch((err) => {
    console.log("Error in database connection");
    console.error(err);
});


app.use(express.json());

const PORT = 3000;

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use((err, req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statuscode).json({
        succes:false,
        statuscode,
        message
    });
});