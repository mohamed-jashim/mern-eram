const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

module.exports = session({
  name: "snaz_0ozQd8310",

  // 🔑 MUST exist in .env
  secret: process.env.JWT_SECRET,

  resave: false,
  saveUninitialized: false,
  unset: "destroy",

  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: "sessions",
  }),

  cookie: {
    httpOnly: true,
    secure: false, // set true only if HTTPS
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});
