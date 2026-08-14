const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

let products = [
    { title: 'Wireless Headphones', description: 'High quality sound with deep bass', price: 2499 },
    { title: 'Smart Watch', description: 'Track your fitness and heart rate', price: 3499 },
    { title: 'Bluetooth Speaker', description: 'Portable waterproof speaker', price: 1499 }
];

app.get('/api/seed', (req, res) => {
    res.send('Sample products added successfully! <a href="/">Go to Home</a>');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});