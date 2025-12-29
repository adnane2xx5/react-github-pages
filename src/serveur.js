const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Exemple route
app.get('/', (req, res) => {
    res.send('Backend React WAC/FCB actif !');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
