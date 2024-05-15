const express = require('express');
const app = express();

let counter = 0;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get counter data
app.get('/', (req, res) => {
    res.json({ counter });
});

// Endpoint to increment counter
app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// Endpoint to decrement counter
app.post('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
