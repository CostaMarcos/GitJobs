const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 
const fs = require('fs')
const path = require('path');

const packageDefinition = protoLoader.loadSync('proto/persistencia.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const persistencia= grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

function lerArquivo(_, callback) {
    const content = fs.readFileSync(path.resolve(__dirname, 'data', 'items.json'), 'utf-8')
    callback(null, {data: JSON.parse(content)}) 
}

async function gravarArquivoJSON (body, callback) {
    try{
        const { email } = body.request
    
        const listaPessoas = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'items.json'), 'utf-8'));
        
        listaPessoas.push({ email })
        
        const arquivoAtualizado = JSON.stringify(listaPessoas)
        fs.writeFileSync(path.resolve(__dirname, 'data', 'items.json'), arquivoAtualizado)
        callback(null, null) 

    }catch(err){
        console.log(err);
    }

}

server.addService(persistencia.PersistenciaService.service, {
    CadastrarEmail: gravarArquivoJSON,
    ListarEmail: lerArquivo,
});

server.bindAsync(`0.0.0.0:4003`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});


// api.github.com/frontendbr/vagas/issues