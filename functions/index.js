const firebaseAdmin = require("firebase-admin");
const functions = require("firebase-functions");
// const restify = require("restify");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

firebaseAdmin.initializeApp(functions.config().firebase);


// functions.app((req, res) => {
//   res.send("Hello world!");
// });

// const server = restify.createServer();

// server.listen(80, () => {});

// server.get("/", (req, res, next) => {
//   res.send("Hello world!");
//   next();
// });

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// exports.api = functions.https;
