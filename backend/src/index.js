const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const News = require('./news.model');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/news', async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

