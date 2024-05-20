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
app.get('/senddoctor',async (req,res)=>
{

try{
    const doctorName = req.query.doctorName; 
    const contactNumber = req.query.contactNumber;
    const qualifications = req.query.qualifications;
    const experienceYears = req.query.experienceYears; 
    const email = req.query.email;
    const profilePictureUrl = req.query.profilePictureUrl;
    const username = req.query.username;
    const service=req.query.selectedService;
    const password = req.query.password;
   const fees=req.query.fees;
    console.log(doctorName)
    console.log(contactNumber)
    console.log(qualifications)
    console.log(experienceYears)
    console.log(email)
    console.log(profilePictureUrl)
    console.log(fees)
    console.log(service)

    try {
    
        const sql = 'INSERT INTO Doctors (doctor_name, contact_number, qualifications, experience_years, email, profile_picture_url,username,password,service,fees) VALUES (?, ?, ?, ?, ?, ?,? , ?, ?, ?)';
        const values = [doctorName, contactNumber, qualifications, experienceYears, email, profilePictureUrl,username,password,service,fees];

        await pool.query(sql, values);
        let successmessage = "Doctor Added Successfully!";
        const response = {
            successmessage: successmessage,
        };
      console.log(response);
        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });
        res.send('Data received and inserted successfully');
    } catch (error) {
        console.error('Error:', error.message);

        let responseMessage;
        let statusCode;

        switch (error.code) {
            case 'ER_DUP_ENTRY':
                responseMessage = 'Duplicate entry error. The specified Doctor already exists.';
                statusCode = 400;
                break;
            case 'ER_NO_REFERENCED_ROW_2':
                responseMessage = 'Foreign key constraint violation. The specified SupplierID does not exist.';
                statusCode = 400;
                break;
            // Add more cases for other error types as needed

            default:
                responseMessage = 'Internal Server Error';
                statusCode = 500;
        }

        const response = {
            errorsinsertion: responseMessage,
        };

        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });

        //   console.log(response);
        res.status(statusCode).send(responseMessage);
    } finally {
       
    }
   
}
catch(error)
{

}




});
app.get('/deletedoctor', async (req, res) => {
    const doctorid = req.query.customerid;
    // console.log(customerid);
 

    try {

        // Check if the medicineID exists before deletion
        const checkSql = 'SELECT * FROM Doctors WHERE doctor_id = ?';
        const checkResult = await pool.query(checkSql, [doctorid]);

        if (checkResult.length === 0) {
            const response = {
                errorsdeletion: 'Doctor not found. Deletion failed.',
            };

            wss.clients.forEach((client) => {
                client.send(JSON.stringify(response));
            });

            //    console.log(response);
            res.status(404).send('Doctor not found. Deletion failed.');
            return;
        }

        // Delete the row with the specified medicineID
        const deleteSql = 'DELETE FROM Doctors WHERE doctor_id = ?';
        await pool.query(deleteSql, [doctorid]);

        let successmessage = 'Doctor Deleted Successfully!';
        const response = {
            successmessage: successmessage,
        };

        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });

        // console.log('Data deleted from customer table');
        res.send('Data received and deleted successfully');
    } catch (error) {
        console.error('Error:', error.message);

        let responseMessage;
        let statusCode;

        switch (error.code) {
            // Handle specific error codes as needed
            default:
                responseMessage = 'Internal Server Error';
                statusCode = 500;
        }

        const response = {
            errorsdeletion: responseMessage,
        };

        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });

        //console.log(response);
        res.status(statusCode).send(responseMessage);
    } finally {
    
    }
});
app.get('/updatedoctor', async (req, res) => {
    const {
        doctorid,
        doctorName,
        contactNumber,
        qualifications,
        experienceYears,
        email,
        profilePictureUrl,
        username,
        password,
        service,
        fees
    } = req.query;
console.log(username);
console.log(password);

    try {

        // Check if the specified medicineID exists before updating
        const checkSql = 'SELECT * FROM Doctors WHERE doctor_id = ?';
        const checkResult = await pool.query(checkSql, [doctorid]);

        if (checkResult.length === 0) {
            const response = {
                errorsupdate: 'Doctor not found. Update failed.',
            };

            wss.clients.forEach((client) => {
                client.send(JSON.stringify(response));
            });

            //    console.log(response);
            res.status(404).send('Doctor not found. Update failed.');
            return;
        }



        // Update the row in the Medicine table based on medicineID
        const updateSql = 'UPDATE Doctors SET doctor_name=?, qualifications=?, experience_years=?, contact_number=?, email=?, profile_picture_url=?, username=?, password=?, service=?, fees=? WHERE doctor_id=?';

        const updateValues = [doctorName, qualifications, experienceYears, contactNumber, email, profilePictureUrl, username, password,service,fees, doctorid];
        
        await pool.query(updateSql, updateValues);
        let successmessage = 'Doctor Updated Successfully!';
        const response = {
            successmessage: successmessage,
        };

        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });

        // console.log('Data updated in Customer table');
        res.send('Data received and updated successfully');

    } catch (error) {
        console.error('Error:', error.message);

        let responseMessage;
        let statusCode;

        switch (error.code) {
            // Handle specific error codes as needed
            default:
                responseMessage = 'Internal Server Error';
                statusCode = 500;
        }

        const response = {
            errorsupdate: responseMessage,
        };

        wss.clients.forEach((client) => {
            client.send(JSON.stringify(response));
        });

        //     console.log(response);
        res.status(statusCode).send(responseMessage);
    } finally {
     
    }
});

app1.get('/checkprofile', async (req, res) => {

    try {
        const username = req.query.username; // Access the text1 query parameter sent from the client
console.log(username);
  
        // Compare the hashed password in the database
        const [rows] = await pool.execute(
            'SELECT * FROM Doctors WHERE username = ?',
            [username] // Directly use the user-provided password
        );

        if (rows.length > 0) {
          
            const response = {
               dataprofile:rows
            };
            console.log(response);

            wss.clients.forEach((client) => {
                client.send(JSON.stringify(response));
            });


        }
        else {
            let loginstatus = "Incorrect";
            const response = {
                loginstatus: loginstatus,
            };
            wss.clients.forEach((client) => {
                client.send(JSON.stringify(response));
            });
            //   console.log(response);


        }


    } catch (error) {
        console.error('Error:', error.message);
    }
});
app1.get('/generategemini', async (req, res) => {
    // Extracting the basic prescription from query parameters
    const basicPrescription = req.query.doctorbasicprescriptionword;
    console.log(basicPrescription)
    if (!basicPrescription) {
        return res.status(400).send('No prescription provided');
    }

    try {
        // Configure the model and prompt for generating content
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Generate a concise prescription based on the following input, focusing strictly on medication information, dosage instructions, and safety advice. Ensure that no personal patient details are included: "${basicPrescription}"`;

        // Generate refined content based on the basic prescription
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const refinedPrescription = response.text();
        console.log(refinedPrescription);
        
        // Send the refined prescription as the response
        res.json({ refinedPrescription });

    } catch (error) {
        console.error('Error with the AI generation or server:', error.message);
        res.status(500).send('Internal server error');
    }
});
app1.get('/saveprescription', async (req, res) => {
    // Extracting query parameters from the request
    const appointmentID = req.query.appointmentID;
    
    const description = req.query.description;

    try {
        // Update the refund status of the payment in the Payments table
        await pool.execute(`
            UPDATE Appointments 
            SET feedback = ?
            WHERE AppointmentID = ?
        `, [description, appointmentID]);

         let successstatusprescription="Prescription Updated Successfully!";
        res.json({ successstatusprescription });


    } catch (error) {
        console.error('Database or server error:', error.message);
        res.status(500).send('Internal server error'); // Send HTTP status 500 for internal server errors
    }
});
