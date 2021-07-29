const functions = require("firebase-functions");
const config = functions.config();
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});


const mailOptions = {
  from: "Demsaf tech",
  to: "dedan.msafari@gmail.com",
  subject: "SUCCESS",
  text: "Our first organizational Client",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello from Firebase!");
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        response.send(" An ERROR: " + error);
      } else {
        response.send("Email sent: " + info.response);
      }
    }
    );
  });
});

