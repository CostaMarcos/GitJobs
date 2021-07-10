const axios = require('axios');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 

const packageDefinition = protoLoader.loadSync('proto/issue.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const issueProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(issueProto.IssueService.service, {
    GetIssue: (_,callback) => {

        callback(
            null
        );
    }
});
