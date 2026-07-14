const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// 🚀 CORS Configuration (Isse local aur vercel dono par block nahi hoga)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept']
})); 

app.use(express.json());

// Base Route for Health Check
app.get('/api', (req, res) => {
    res.status(200).json({ status: "online", message: "Raksha Shield Backend Core Online!" });
});

const myEmail = process.env.MY_EMAIL; 
const myAppPassword = process.env.MY_APP_PASSWORD; 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myEmail,
        pass: myAppPassword
    }
});

// SOS Dispatcher Route
app.post('/api/sos', async (req, res) => {
    const { contacts, latitude, longitude } = req.body;

    let emailTargets = [];
    if (contacts && contacts.length > 0) {
        emailTargets = contacts.map(c => c.phone).filter(e => e.includes('@'));
    }
    
    if (emailTargets.length === 0) {
        emailTargets = [myEmail]; 
    }

    const mapLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    const mailOptions = {
        from: `Raksha Safety System <${myEmail}>`,
        to: emailTargets.join(', '), 
        subject: '🚨 EMERGENCY SHAKTI ALERT 🚨',
        html: `
            <div style="padding: 25px; border: 4px solid #ff3838; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 12px; max-width: 500px;">
                <h2 style="color: #ff3838; margin-top: 0;">🚨 RAKSHA EMERGENCY ALERT</h2>
                <p style="font-size: 16px; color: #333;">I am in serious danger! Please help me immediately.</p>
                <div style="margin: 20px 0;">
                    <a href="${mapLink}" target="_blank" style="background: #ff3838; color: white; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📍 TRACK LIVE LOCATION</a>
                </div>
            </div>
        `
    };

    try {
        if (!myEmail || !myAppPassword) {
            return res.status(500).json({ 
                success: false, 
                message: "Environment variables (MY_EMAIL / MY_APP_PASSWORD) missing!" 
            });
        }

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: "Alert Dispatched Automatically!" });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Mail Sending Error: " + err.message });
    }
});

// 🚀 FIXED: Ab bina kisi condition ke local terminal par chalane ke liye port 3000 hamesha listening mode par rahega
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});

// Vercel serverless functions ke liye export
module.exports = app;