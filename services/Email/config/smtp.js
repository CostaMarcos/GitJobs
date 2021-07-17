const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: "gitjobs8@gmail.com",
    pass: process.env.PASS
}