const express = require('express');
const issue = require('./issue');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/issues', (req, res, next) => {
    issue.GetIssue(null,
    () => {
        res.status(200).send({ ok: 'ok' });
    });
});

app.listen(3000, () => {
    console.log('Server on port: http://localhost:3000');
})