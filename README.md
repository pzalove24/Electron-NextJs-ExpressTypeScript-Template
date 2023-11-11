# Electron NextJs ExpressTypeScipt

this project is the attempt to create a template for full-stack software development in both web and desktop application

NextJs as the frontend
ExpressTypeScript as the backend

## SetUp client using NextJs

1. npx create-next-app@latest client

## SetUp server using Express with Typescript

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

## SetUp electron and electron-builder
1. go to the root directory
2. npm init
3. npm install --save-dev concurrently electron electron-builder wait-on

script for package.json in server
```
"recreate-dist": "rmdir /S /Q dist && start /b tsc -w ",
"dev": "start /b tsc -w & nodemon dist/app.js",
"start": "tsc && node dist/app.js",
"test": "echo \"Error: no test specified\" && exit 1"
```

script for package.json in client
```
"dev": "next dev",
"build": "next build",
"start": "next lint && next start",
"lint": "next lint"
```

script for package.json in root directory
```
{
  "name": "memristor_evaluating_webapp",
  "version": "1.0.0",
  "description": "webapp_prototype_for_board",
  "main": "./dist/src/app.js",
  "scripts": {
    "start:ts": "ts-node src/app.ts",
    "start": "tsc && node dist/app.js",
    "dev": "start /b tsc -w & nodemon dist/src/app.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "migrate:dev": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "prisma:generate": "prisma generate"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^5.5.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "serialport": "^12.0.0",
    "socket.io": "^4.4.1"
  },
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "devDependencies": {
    "@types/express": "^4.17.20",
    "@types/morgan": "^1.9.7",
    "nodemon": "^3.0.1",
    "prisma": "^5.5.2",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```
