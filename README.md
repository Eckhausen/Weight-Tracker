# Weight Tracker
![bild](https://github.com/Eckhausen/Weight-Tracker/assets/80269043/dcc89771-7589-4aa5-93fb-df343bad5222)

Weight Tracker is a simple web application that allows you to track your weight and body fat percentage over time. The data is stored in a Google Sheets document, and the application displays a chart of your progress.
## Features
* Track weight and body fat percentage
* Store data in Google Sheets
* Display a chart of weight and body fat percentage over time
* Integrated with an online body fat calculator

## Getting Started
These instructions will help you set up and run the project on your local machine for development and testing purposes.
### Prerequisites
* Node.js and npm installed
* A Google Sheets document to store the data
* A Google API key JSON file for authentication

### Installing
1. Clone the repository:
```
git clone https://github.com/Eckhausen/Weight-Tracker.git
cd Weight-Tracker
```
2. Install the dependencies:
```
npm install
```
3. Place your Google API key JSON file in the project directory and rename it to weight-tracker-credentials.json.
4. Create a .gitignore file to exclude the Google API key JSON file from version control:
```
echo 'weight-tracker-credentials.json' >> .gitignore
```
### Running the Application
1. Start the backend server:
```
node server.js
```
2. Start the HTTP server:
```
http-server
```
3. Open index.html or just localhost:8080 in your web browser.

## Usage
1. Open the application in your web browser.
2. Enter the date, weight, and body fat percentage in the form.
3. Click "Submit" to save the data to Google Sheets and update the chart.
4. Use the embedded body fat calculator to calculate your body fat percentage.

## Contributing

Feel free to submit pull requests to improve the project. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

* Google Sheets API for data storage
* Calculator.net for the body fat calculator
