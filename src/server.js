const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.static(__dirname + '/www'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/www/blog.html');
});

app.get('/sniperbot', (req, res) => {
    res.sendFile(__dirname + '/www/projects/sniperbot.html');
});

app.get('/codefluent', (req, res) => {
    res.sendFile(__dirname + '/www/projects/codefluent.html');
});

app.get('/discord', (req, res) => {
    res.redirect(`https://discord.com/invite/p7K6vB5`)
});

app.get('/twitch', (req, res) => {
    res.redirect(`https://twitch.tv/adsnipers`)
});

app.get('/youtube', (req, res) => {
    res.redirect(`https://www.youtube.com/channel/UC1dZiEHj4kfvf_m4iqhCihg`)
});

app.get('/instagram', (req, res) => {
    res.redirect(`https://instagram.com/adsniperswastaken`)
});

app.get('/twitter', (req, res) => {
    res.redirect(`https://twitter.com/adsnipersTV`)
});

app.get('/tiktok', (req, res) => {
    res.redirect(`https://www.tiktok.com/@adsnipers`)
});

app.get('/spotify', (req, res) => {
    res.redirect(`https://open.spotify.com/artist/47SInI5D1nIWNm3PYhZcBZ?si=8htKUla5QyqqNk3xSfB43Q`)
});

app.get('/github', (req, res) => {
    res.redirect(`https://github.com/adsnipers`)
});

app.get('/api', (req, res) => {
        if (req.query.redirect) {
            res.redirect(`https://${req.query.redirect}`)
        }
})