const axios = require('axios');
const validaApi = require('../valida-api');

jest.mock('axios');

test('GET /', async () => {
    const resp = {msg: 'API Simples com Express.js'};

    axios.get.mockResolvedValue({ data: resp});

    const result = await validaApi.principal();
    console.log(result);

    expect(result).toEqual(resp);

});

test('POST /alunos', async () => {

    const payload = {
        nome: "fulano"
    };

    const resp = {msg: 'Aluno adicionado com sucesso!'}

    axios.post.mockResolvedValue({ data: resp});

    const result = await validaApi.postAlunos(payload);
    console.log(result);

    expect(result.data).toEqual(resp);

});

