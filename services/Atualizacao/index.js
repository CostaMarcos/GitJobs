const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 
const dotenv = require('dotenv');
const axios = require('axios');
const Issue = require('../controller/issue');

const packageDefinition = protoLoader.loadSync('proto/atualizacao.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const atualizacaoProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();


async function getAtualiza(_,callback){
    await Issue.GetIssue(null, (err, data) => {
        const response = data
        var QuantiNovVag = 0;
        var datas = DatasHoje();
        for (var i = 0; i<30;i++){
            if ( response.issues[i].created_at >= datas[1] && response.issues[i].created_at <= datas[0] ) {
                QuantiNovVag += 1;

            }
        }
        callback(null,  {vagas:QuantiNovVag})
    });
}


function DatasHoje(){
    var hoje = new Date();
    var HojeString = new Date(hoje).toISOString();
    var ontem = new Date(hoje);
    ontem.setDate(ontem.getDate() - 1);
    var OntemString = new Date(ontem).toISOString();
    return [HojeString,OntemString]
}

server.addService(atualizacaoProto.AtualizacaoService.service, {
    GetAtualiza:getAtualiza,
    
});

server.bindAsync(`0.0.0.0:4002`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
