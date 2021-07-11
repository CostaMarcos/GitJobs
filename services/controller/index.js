const express = require('express');
const issue = require('./issue');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');



dotenv.config();

app.use(cors(), bodyParser.json());

app.get('/issues', (req, res, next) => {
    
    issue.GetIssue(req.query, (err, data) => {
        if(err){
            res.status(500).send({ error: 'Internal error' });
        }
        else {
            res.json(data);
        }
    });
});

app.post('/issues', (req, res, next) => {
    issue.CreateIssue(req.body, (err, data) => {
        if(err){
            res.status(500).send({ error: 'Internal error' })
        }
        else {
            res.json(data);
        }
    })
})

app.listen(process.env.ROOT, () => {
    console.log('Server on port: http://localhost:', process.env.ROOT);
})