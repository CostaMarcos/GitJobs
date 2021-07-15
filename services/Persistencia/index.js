const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader'); 
const fs = require('fs')

const packageDefinition = protoLoader.loadSync('proto/persistencia.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const persistencia= grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

function lerArquivo(_, callback) {
    const content = fs.readFileSync('./data/items.json', 'utf-8')
    callback(null, {data:content}) 
}

function gravarArquivoJSON (body, callback) {
    
    const { email } = body
    
    const listaPessoas = lerArquivo()
    listaPessoas.push({ email })
    
    const arquivoAtualizado = JSON.stringify(listaPessoas)
    fs.writeFileSync('./data/items.json', arquivoAtualizado, 'utf-8')
    callback(null,null) 
}

server.addService(persistencia.PersistenciaService.service, {
    CadastrarEmail: gravarArquivoJSON,
    ListarEmail: lerArquivo,
});

server.bindAsync(`0.0.0.0:4003`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});


// api.github.com/frontendbr/vagas/issues