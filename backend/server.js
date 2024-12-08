import express from "express";
import { Variables } from "./src/config/variables.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/database.js";
import { router } from "./src/routes/index.js";
import path from "path"
import dotenv from "dotenv"

dotenv.config();

const PORT = Variables.PORT;

const __dirname = path.resolve();


const app= express();

//middlewares 
// to parse JSON data in the req.body, exceed the limit of json data to upload large file
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());


// make the ROUTES
router(app);


// backend: http://localhost:5010 + frontend: http://localhost:4000 => http://localhost:5010 (reduce conflict from backend based URL)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


app.listen(PORT, () =>{
    connectDB()
    console.log("Server listening on port: ", PORT)
})


