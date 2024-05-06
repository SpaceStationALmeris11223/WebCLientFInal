const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/calculate', (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    const bmi = calculateBMI(height, weight);
    res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});

// Function to calculate BMI
function calculateBMI(height, weight) {
    return weight / (height * height);
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
