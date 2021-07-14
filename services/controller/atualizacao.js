const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const dotnev = require('dotenv');
const path = require('path');

dotnev.config();

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "..", "..", "proto", "atualizacao.proto"), 
    {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
    }
);

const AtualizacaoService = grpc.loadPackageDefinition(packageDefinition).AtualizacaoService;
const client = new AtualizacaoService(`0.0.0.0:4000`, grpc.credentials.createInsecure());

module.exports = client;
