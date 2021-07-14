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



    async function NovasVagas(_,callback){
        console.log('aaaaaaaaaaaaaaaaaaaa')
        await Issue.GetIssue(null, (err, data) => {
            if(err){
                console.log(err)
               return [];
            }
            else {
                
                const response = data
                console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk')
                var QuantiNovVag = 0;
                var datas = DatasHoje();
                for (var i = 0; i<30;i++){
                    if ( response.workflow_runs[i].created_at >= datas[1] && response.workflow_runs[i].created_at <= datas[0] ) {
                        QuantiNovVag += 1;

            }
        }
        callback(null,  {vagas:QuantiNovVag})
    }
                
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
    GetAtualiza:NovasVagas,
    
});

server.bindAsync(`0.0.0.0:4001`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
