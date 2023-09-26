import nodemailer from "nodemailer";
import "dotenv/config";

const {UKR_NET_EMAIL_FROM, UKR_NET_EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: UKR_NET_EMAIL_FROM,
        pass: UKR_NET_EMAIL_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    from: UKR_NET_EMAIL_FROM,
    to: "deyena9429@ipniel.com",
    subject: "Test email",
    html: "<strong>Test email</strong>"
};

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))