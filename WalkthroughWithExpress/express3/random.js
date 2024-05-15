const express = require('express');
const app = express();

// Route for generating a random number
app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
