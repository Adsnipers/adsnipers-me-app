const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.static(__dirname + '/www'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/sniperbot', (req, res) => {
    res.sendFile(__dirname + '/www/projects/sniperbot.html');
});

app.get('/codefluent', (req, res) => {
    res.sendFile(__dirname + '/www/projects/codefluent.html');
});

app.get('/api', (req, res) => {
        if (req.query.redirect) {
            res.redirect(`http://${req.query.redirect}`)
        }
})