const nodemailer = require('nodemailer');
const SMT_CONFIG = require('./config/smtp');
const NewIssues = require('../controller/atualizacao');
const Persistencia = require('../controller/persistencia');


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
    }catch(err){
        console.log(err);
        console.log('Não foi possível enviar os emails de notificação.');
    }
}

async function main() {

    // Na primeira execução é necessário aguardar um tempo 
    // antes de prosseguir para que outros serviços estejam no ar
    await wait(5000);

    while(true){
        var listaEmails = [];
        var vagas;
    
        await Persistencia.ListarEmail(null, (err, emails) =>{
            listaEmails.push(emails.data);
        });
    
        await NewIssues.GetAtualiza(null, (err, data) => {
            vagas = data.vagas;
        });
    
    
        // Realiza o envio de emails a cada 12h (43.200.000 ms)
        sendEmail(vagas, listaEmails);
        await wait(43200000);
    }
} 

main();