import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // Example with Gmail; replace with your settings
  service: "Gmail",
  auth: {
    user: "btsbank1997@gmail.com", // Your email
    pass: "qlym apoi tgpr vmsl", // Your email password or app password
  },
});

// Email options
const sendConfirmationEmail = (email, activationCode) => {
  transporter
    .sendMail({
      from: "BTS BANK",
      to: email,
      subject: "Confirmation votre compte",
      html: `<h1>Email de confirmation</h1>
    <h2>Bonjour</h2>
    <p>Pour confirmer votre compte, veiller cliquer sur ce lien</p>
    <a href=http://localhost:3000/confirm/${activationCode}>Cliquer Ici ! </a>
    `,
    })
    .catch((error) => console.log(error));
};

export default sendConfirmationEmail;

