import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORTNUMMER || 5000;


// 
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => { res.send("Hello from server!") });

// Server starten

app.listen(port, () => {
    console.log((`Server läuft auf http://localhost: ${port}`));
});
