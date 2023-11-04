### SetUp client using NextJs

1. npx create-next-app@latest client

### SetUp server using Express with Typescript

1. create server folder
2. cd server and npm init -y
3. npm install express
4. npm install --save-dev typescript @types/express @types/morgan @types/cors
5. npm install --save-dev nodemon
6. npm i cors dotenv helmet morgan
7. npx tsc --init
8. tsconfig.json uncomment outDir and set to "outDir": "./dist"
9. create .env file for PORT specification
10. add .gitignore
```
node_modules
.env
dist
```
11. create src folder
12. create app.ts and put some express code
```
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
```
13. npx tsc
14. add script in package.json
- "dev": "start /b tsc -w & nodemon dist/app.js" //Window10
- "dev": "tsc -w & nodemon dist/app.js", //Non-Window10