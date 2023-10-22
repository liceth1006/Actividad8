import express from "express";
import authRoute from "./auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", authRoute); 

app.listen(PORT, () => {
  console.log("Servidor en funcionamiento en http://localhost:" + PORT);
});