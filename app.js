const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Radi hosting</h1>')
});

app.get('/data', (req, res) => {
    res.json({
        data: [
            {
                name: 'Cevu',
                position: 'CEO'
            },
            {
                name: 'Seli',
                position: 'CFO'
            },
            {
                name: 'Box',
                position: 'CTO'
            },
            {
                name: 'Kula',
                position: 'CMO'
            },
        ]
    })
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})