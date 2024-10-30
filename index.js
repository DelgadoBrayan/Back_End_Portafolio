import express from "express";
import cors from "cors";
import route from "./src/routes/contactCompany.js";
import connectDB from "./src/Config/ConnectionDB.js";

const PORT = 3000
const app = express();
app.use(
    cors({
        origin: [
      "http://localhost:5173",
      "http://localhost:3000/",
      "https://mi-portafolio-taupe-eta.vercel.app/"
      
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(express.json());
app.use('/api',route);
connectDB()
app.listen(PORT, () => {
  console.log(`Listo por el puerto ${PORT}`);
});
