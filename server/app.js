import express from 'express';

import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.status(200);
    res.json({
        name: 'Ebenezer',
        message: 'Welcome to More-Recipes'
    });
});


app.listen(port, () => console.log(`Application started on port ${port}`));