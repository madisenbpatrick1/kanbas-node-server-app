import "dotenv/config";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  

UserRoutes(app);

Lab5(app);

Hello(app); // pass app reference to Hello

app.listen(process.env.PORT || 4000);

// start with command line nodemon index.js
