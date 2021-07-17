const nodemailer = require('nodemailer');
const SMT_CONFIG = require('./config/smtp');
const NewIssues = require('../controller/atualizacao');
const Persistencia = require('../controller/persistencia');
const dotenv = require('dotenv');

dotenv.config();

async function sendEmail(vagas, emails){
    try{
        const transporter = await nodemailer.createTransport({
            host: SMT_CONFIG.host,
            port: SMT_CONFIG.port,
            secure: false,
            auth: {
                user: SMT_CONFIG.user,
                pass: SMT_CONFIG.pass
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    
        const mailsent = await transporter.sendMail({
            from: 'Git Jobs <gitjobs8@gmail.com>',
            to: emails,
            text: `Hoje temos ${vagas} novas vagas`,
            subject: 'Novas vagas de emprego'
        });

        console.log('Os usuários cadastrados foram notificados de novas vagas');
    }catch(err){
        console.log(err);
        console.log('Não foi possível enviar os emails de notificação.');
    }
}

async function main() {
    var listaEmails = [];
    var vagas;

    await Persistencia.ListarEmail(null, (err, emails) =>{
        for(let email of emails.data){
            listaEmails.push(email.email);
        }

        NewIssues.GetAtualiza(null, (err, data) => {
            vagas = data.vagas;
            sendEmail(vagas, listaEmails);

            // Realiza o envio de emails a cada 12h (43.200.000 ms)

            new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                    main();
                }, process.env.TIME_NOTIFICATION);
            });
            
        });
    })
        



    
} 

// Na primeira execução é necessário aguardar um tempo 
// antes de prosseguir para que outros serviços estejam no ar
new Promise(resolve => {
    setTimeout(() => {
        resolve();
        main();
    }, 5000);
});