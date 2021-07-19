const express = require('express');
const issue = require('./issue');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const atualizacao = require('./atualizacao');
const persistencia = require('./persistencia');

dotenv.config();

app.use(cors(), bodyParser.json());

app.get('/', (req, res, next) => {
    
    issue.GetIssue(null, (err, data) => {
        if(err){
            res.status(500).send({ error: 'Internal error' });
        }
        else {
            res.json(data);
        }
    });
});

app.post('/email', async (req, res) => {
    await persistencia.CadastrarEmail(req.body, (err, data) =>{
        res.status(200).send(req.body);            
    })
})

app.listen(process.env.ROOT, () => {
    console.log('Backend on port: http://localhost:', process.env.ROOT);
})