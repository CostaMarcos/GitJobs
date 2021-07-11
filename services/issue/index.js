const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 
const dotenv = require('dotenv');
const axios = require('axios');
const Issue = require('../models/issue');

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
    var list = await Issue.find({});
    callback(null, { issues: list });
}

async function createIssue(issue, callback){
    const list = await Issue.find({})
    if(list.find((_issue) => _issue.url == issue.request.url)){
        callback(null, null);
    }else {
        await Issue.create(issue.request);
        callback(null, issue.request);   
    }
}


server.addService(issueProto.IssueService.service, {
    GetIssue: searchAllIssues,
    CreateIssue: createIssue
});

server.bindAsync(`0.0.0.0:${process.env.ISSUE_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});


// api.github.com/frontendbr/vagas/issues