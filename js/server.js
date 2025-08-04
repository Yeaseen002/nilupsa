const express = require(express);
const bodyParser = require(body-parser);
const cors = require(cors);
const nodemailer = require(nodemailer);

const app = express();
const PORT = 5000;

 Middleware
app.use(bodyParser.json());
app.use(cors());

 Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service gmail,  Use your email provider
  auth {
    user your-email@gmail.com,  Replace with your email
    pass your-email-password,  Replace with your email password or app password
  },
});

 POST route to handle form submissions
app.post(send, (req, res) = {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from email,
    to nipu07nilufer@gmail.com,  Replace with your email
    subject `Contact Form Submission ${subject}`,
    text `Name ${name}nEmail ${email}nnMessagen${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) = {
    if (error) {
      console.error(Error sending email, error);
      res.status(500).send(Failed to send email);
    } else {
      console.log(Email sent, info.response);
      res.status(200).send(Email sent successfully);
    }
  });
});

 Start the server
app.listen(PORT, () = {
  console.log(`Server running on httplocalhost${PORT}`);
});
