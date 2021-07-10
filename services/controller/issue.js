const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('proto/issue.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const IssueService = grpc.loadPackageDefinition(packageDefinition).IssueService;
const client = new IssueService('127.0.0.1:3001', grpc.credentials.createInsecure());

module.exports = client;
