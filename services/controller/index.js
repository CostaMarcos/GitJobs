const express = require('express');
const issue = require('./issue');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const atualizacao = require('./atualizacao')


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
// teste de serviço de atualizaçao
// app.get('/atualizacao', (req,res)=> {
    
//     atualizacao.GetAtualiza(null, (err,data)=>{
//         if (err){
//             console.log(err)
//         }
//         res.json(data)
//     })
// }) 
app.listen(process.env.ROOT, () => {
    console.log('Server on port: http://localhost:', process.env.ROOT);
})