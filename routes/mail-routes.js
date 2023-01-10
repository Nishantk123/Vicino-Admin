const express = require("express");

const router = express.Router();
const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "sannukashyap24@gmail.com",
      pass: "Archna@12345"
    }
 });
 


router.post("/send_mail", async (req, res) => {
  const { number } = req.body;
  const mailOptions = {
    from: 'sannukashyap24@gmail.com', // Sender address
    to: 'nishant1262@gmail.com', // List of recipients
    subject: 'Node Mailer', // Subject line
    html: '<h2 style="color:#ff6600;">Hello People!, Welcome to Bacancy!</h2>',
    // attachments: [
    //    { filename: 'profile.png', path: './images/profile.png' }
    // ]
};
transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    } 
 });
  res.status(200).json({"message":"mail send successfully"});
});

module.exports = router;
