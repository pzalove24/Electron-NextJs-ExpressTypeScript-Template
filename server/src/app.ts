import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("combined"));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("HelloWorld");
});

// SERVER CONNECTION
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT} CONNECTED`);
});