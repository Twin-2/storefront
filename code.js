var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "davidwhit818@gmail.com",
    pass: "G1oo2gle34@2",
  },
});

var mailOptions = {
  from: "davidwhit818@gmail.com",
  to: "devjessparker@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Check it out!!!!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
