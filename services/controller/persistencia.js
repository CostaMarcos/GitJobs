const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "..", "..", "proto", "persistencia.proto"), 
    {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
    }
);

const PersistenciaService = grpc.loadPackageDefinition(packageDefinition).PersistenciaService;
const client = new PersistenciaService(`0.0.0.0:4003`, grpc.credentials.createInsecure());

module.exports = client;
