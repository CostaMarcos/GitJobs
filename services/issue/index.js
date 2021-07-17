const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const packageDefinition = protoLoader.loadSync('proto/issue.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const issueProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

async function searchAllIssues(filter, callback){
    try{
        const response = (await axios.get('https://api.github.com/repos/frontendbr/vagas/issues')).data;

        var list = [];

        for(let issue of response){
            
            obj = {
                user: issue.user.login, 
                url: issue.html_url,
                issue_id: issue.number,
                title: issue.title,
                state: issue.state,
                labels: issue.labels,
                created_at: issue.created_at
            }
    
            list.push(obj);
        }
        
        callback(null, { issues: list });
    }catch(err){
        console.log(err);
        callback(null, { issues: [] })
    }




}

server.addService(issueProto.IssueService.service, {
    GetIssue: searchAllIssues
});

server.bindAsync(`0.0.0.0:${process.env.ISSUE_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});


// api.github.com/frontendbr/vagas/issues