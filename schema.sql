-- Create the database consultify
CREATE DATABASE consultify;

-- Use the consultify database
USE consultify;

-- Create the Doctors table
CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(255) NOT NULL,
    service VARCHAR(255) NOT NULL,
    qualifications TEXT,
    experience_years INT,
    contact_number VARCHAR(15),
    email VARCHAR(255),
    profile_picture_url TEXT,
    fees TEXT,
    username VARCHAR(50) unique,
    password VARCHAR(50) NOT NULL,
    rating FLOAT DEFAULT NULL
);
UPDATE Doctors
SET rating = 5
WHERE doctor_id = 36; -- Replace 1 with the actual doctor_id of the doctor you want to update

select * from Doctors;

DELETE FROM Doctors where doctor_id=3;
DELETE FROM Doctors where doctor_id=5;
DELETE FROM Doctors where doctor_id=6;
DELETE FROM Doctors where doctor_id=7;
DELETE FROM Doctors where doctor_id=11;
select * from Doctors;


CREATE TABLE DoctorAvailability (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doctorId INT NOT NULL,
    dayOfWeek ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    slot TIME NOT NULL,
    isAvailable BOOLEAN NOT NULL DEFAULT true,
    isbooked BOOLEAN NOT NULL DEFAULT false,
    FOREIGN KEY (doctorId) REFERENCES Doctors(doctor_id) -- Assuming you have a Doctors table
);

ALTER TABLE DoctorAvailability
ADD COLUMN AppointmentID INT,
ADD CONSTRAINT fk_appointment_id FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID) ON DELETE CASCADE;

ALTER TABLE DoctorAvailability
ADD COLUMN dayDate DATE;
select * from DoctorAvailability;
USE consultify;

CREATE TABLE patients (
  
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    phone VARCHAR(20) NOT NULL
);
select *from patients;

CREATE TABLE Appointments (
    AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
    PatientEmail VARCHAR(255) NOT NULL,
    SlotID INT NOT NULL,
    AppointmentDate DATE NOT NULL,
    Status ENUM('scheduled', 'cancelled', 'completed','pending') NOT NULL,
    Notes TEXT,
    feedback TEXT,
    DriveLink VARCHAR(255),
    DoctorID INT NOT NULL, 
    rating FLOAT DEFAULT NULL,
    FOREIGN KEY (SlotID) REFERENCES DoctorAvailability(id),
    FOREIGN KEY (PatientEmail) REFERENCES Patients(email),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(doctor_id) -- Adding foreign key reference to Doctors table
);

UPDATE Appointments
SET Status = 'completed'
WHERE AppointmentID = 10;

select * from Appointments;

CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    AppointmentID INT NOT NULL,
    PatientEmail VARCHAR(255) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,  -- Assuming a format that allows for two decimal places.
    Method VARCHAR(50) NOT NULL,  -- This could be 'credit card', 'debit card', 'cash', 'online', etc.
    TransactionID VARCHAR(255),  -- This might be null if not applicable (e.g., cash payments).
    PaymentStatus ENUM('pending', 'completed', 'failed') NOT NULL,
    DateOfPayment DATETIME NOT NULL,
    RefundStatus ENUM('not refunded', 'pending refund', 'refunded') NOT NULL DEFAULT 'not refunded',
    FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID),
    FOREIGN KEY (PatientEmail) REFERENCES Patients(email)
);
select * from Payments;



Re-enable foreign key checks
-- SET foreign_key_checks = 1;

-- -- Re-enable safe update mode if it was originally enabled
-- SET SQL_SAFE_UPDATES = 1;
