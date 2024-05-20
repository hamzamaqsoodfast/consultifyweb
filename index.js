const { OpenAI } = require("openai");
// Replace 'YOUR_API_KEY' with your actual Gemini API key
const { GoogleGenerativeAI } = require("@google/generative-ai");
 process.env.GOOGLE_GENAI_KEY="AIzaSyCyKGZcs5MYwfGiNcKzFQPo2t3rb3g13q8";
 var { Builder, By, until, Key } = require('selenium-webdriver');
 var driver;
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_KEY);

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'hamzamaqsood@lhr786',
    database: 'consultify',
    waitForConnections: true,
    connectionLimit: 15,
    queueLimit: 0
});
const nodemailer = require("nodemailer");
require("dotenv").config();

// App password and user email from the environment variables for better security
var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'hamzachlove@gmail.com', // Sender gmail address
        pass: 'wndxkxlgxcdevzet' // App password from Gmail account
    },
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Enable CORS for all origins

const app = express();
const app1 = express();
app1.use(cors());
// Increase the limit to handle larger payloads (e.g., 1MB)
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
const path = require('path');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // Set the desired port
function extractTextInCurlyBrackets(message) {
    const regex = /{([^}]+)}/g;
    const matches = message.match(regex);
    if (matches) {
      const extractedText = matches.map(match => match.slice(1, -1));
      return extractedText;
    }
    return [];
  }
//   function openwhatsapp()
// {
 

//   // Create a new instance of the WebDriver
//    driver = new Builder().forBrowser('chrome').build();
//   const baseUrl = 'https://web.whatsapp.com';
  
//   driver.get(baseUrl);
  
// }
// openwhatsapp();
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // Define routes and middleware
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'marketing.html'));
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'adddoctor.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'showdoc.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'logindoc.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'appointment.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docdash.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'appointment.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'scheduleappointment.html'));
});
function sendemailtoadmin()
{
    
    const mailOptions = {
        from: {
            name: 'Consultify Admin System',
            address: 'hamzachlove@gmail.com'
        }, // sender address
        to: ["l217745@lhr.nu.edu.pk"], // list of receivers
        subject: "New Appointment Notification", // Subject line
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <title>New Appointment Notification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
            <table role="presentation" align="center" width="100%" style="max-width: 600px; margin-top: 25px;">
                <tr>
                    <td style="background-color: #004aad; padding: 10px; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">Appointment Booked!</h1>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #ffffff; padding: 20px; text-align: center; border: 1px solid #dddddd;">
                        <p style="margin: 0; color: #333333; font-size: 16px;">Hello, <strong>Hamza</strong>,</p>
                        <p style="margin-top: 20px; color: #555555; font-size: 16px;">Please check your admin portal as a customer has booked an appointment!</p>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #004aad; padding: 10px; text-align: center;">
                        <p style="margin: 0; font-size: 14px; color: #ffffff;">Thank you for using our services!</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ` // HTML body
    };
    
// Send the email
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log("Error sending email: ", error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

}

function sendemailtodoctor(doctoremail)
{
    
    const mailOptions = {
        from: {
            name: 'Consultify Admin System',
            address: 'hamzachlove@gmail.com'
        }, // sender address
        to: [doctoremail], // list of receivers
        subject: "New Appointment Notification", // Subject line
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <title>New Appointment Notification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
            <table role="presentation" align="center" width="100%" style="max-width: 600px; margin-top: 25px;">
                <tr>
                    <td style="background-color: #004aad; padding: 10px; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">Appointment Booked!</h1>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #ffffff; padding: 20px; text-align: center; border: 1px solid #dddddd;">
                        <p style="margin: 0; color: #333333; font-size: 16px;">Hello, <strong>Doctor</strong>,</p>
                        <p style="margin-top: 20px; color: #555555; font-size: 16px;">Please check your Doctor portal as a patient has booked an appointment!</p>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #004aad; padding: 10px; text-align: center;">
                        <p style="margin: 0; font-size: 14px; color: #ffffff;">Thank you for using our services!</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ` // HTML body
    };
    
// Send the email
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log("Error sending email: ", error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

}
