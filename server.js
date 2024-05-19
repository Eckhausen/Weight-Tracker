const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // or specify your frontend URL here
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Load client secrets from environment variables
const client = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth: client });

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/add', async (req, res) => {
    console.log(req.body); // Log the request body
    const { date, weight, bodyFat } = req.body;
    const values = [[date, weight, bodyFat]];

    const resource = { values };
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Sheet1!A:C';

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            resource,
        });
        res.send('Data saved to Google Sheets');
    } catch (error) {
        console.error('Error writing to Google Sheets:', error);
        res.status(500).send('Error saving data');
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
