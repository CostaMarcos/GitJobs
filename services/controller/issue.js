const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const dotnev = require('dotenv');
const path = require('path');

dotnev.config();

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "..", "..", "proto", "issue.proto"), 
    {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
    }
);

const IssueService = grpc.loadPackageDefinition(packageDefinition).IssueService;
const client = new IssueService(`0.0.0.0:${process.env.ISSUE_PORT}`, grpc.credentials.createInsecure());

module.exports = client;
