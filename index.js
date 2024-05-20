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
