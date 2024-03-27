// Importação de pacotes / módulos.
const express = require('express');
const res = require('express/lib/response');
const { v4: uuidv4 } = require('uuid');


// Criar instâncias (objetos), inicializar "classes"
const app = express();
app.use(express.json());

// Outras configurações do APP
const alunos = {};

// Configurar as rotas.
app.get('/', (req, res) => {
    res.json({msg: 'API Simples com Express.js'})
});

app.post('/alunos', (req, res) => {
    const aluno = req.body;
    const idAluno = uuidv4();
    aluno.id = idAluno;
    alunos[idAluno] = aluno;
    res.status(201).json({aluno});
});

app.get('/alunos', (req, res) => {
    res.json({alunos: Object.values(alunos)})
});

app.get('/alunos/:id', (req, res) => {
  const idAluno = req.params.id;
  const aluno = alunos[idAluno];
  const data = {aluno: aluno};
  res.json(data);
});

app.delete('/alunos', (req, res) => {
    // request: body, params (URL), query (query string)
    const id = req.query.id;
    console.log(alunos);
    if (id && alunos[id]) {
        delete alunos[id];
        res.json({msg: 'Aluno excluído com sucesso'});
    }
    else {
        res.status(400).json({msg: "Aluno não encontrado"});
    }

});

// Atualiza o objeto / recurso, substituindo-o.
app.put('/alunos', (req, res) => {
    const id = req.query.id;
    if (id && alunos[id]){
        const aluno = req.body;
        aluno.id = id;
        alunos[id] = aluno;
        res.json({msg: "Aluno atualizado com sucesso"});
    }
    else {
        res.status(400).json({msg: "Aluno não encontrado"});
    }
});

// Execução do servidor HTTP.
app.listen(8000, () => {
    console.log('Servidor pronto na porta 8000')
})

