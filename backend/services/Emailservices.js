// const { promises } = require('nodemailer/lib/xoauth2');
const transporter = require('../config/nodemailerconfig');
  
const sendEmail = (to, subject, html, from) => {
  const mailOptions = {
    // from: 'taniyagour142@gmail.com', //CHANGE
    from,
    to,
    subject,
    html,
  };
  console.log(mailOptions);
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};


module.exports = {sendEmail};