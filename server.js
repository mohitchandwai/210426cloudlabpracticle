const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Node.js App Running 🚀 by mohit');
});

app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is sample API data',
        status: 'success'
    });
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});