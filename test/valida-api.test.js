const axios = require("axios");
const validaApi = require("../valida-api.js");

jest.mock("axios");
test("GET /", async () => {
  const resp = { msg: "API Simples com express" };
  axios.get.mockResolvedValue({ data: resp });

  const result = await validaApi.principal();
  console.log(result);

  expect(result).toEqual(resp);
});


test('POST / alunos', async ()=> {
    const resp = { msg: "Aluno adicionado com sucesso" };
    const payload = {
        nome: "fulano"
    };
    axios.post.mockResolvedValue({data: resp})

    const result = await validaApi.postAlunos(payload)
    console.log(result);

    expect(result.data).toEqual(resp)
});

test('get / alunos', async ()=>{
  const resp = {msg: "Alunos listados com sucesso"};
  axios.get.mockResolvedValue({data: resp})

  const result= await validaApi.getAlunos()
  console.log(result);

  expect(result.data).toEqual(resp)
})

test('get by id / alunos', async ()=>{
  const resp = {msg: "Aluno listado com sucesso"};
  axios.get.mockResolvedValue({data: resp})

  const result= await validaApi.getAlunoById(1)
  console.log(result);

  expect(result.data).toEqual(resp)
})

test('put / aluno', async ()=>{
  const resp = {msg:"Aluno atualizado com sucesso"};
  const payload={
    nome : "luis"
  }
  axios.put.mockResolvedValue({data: resp})

  const result= await validaApi.putUsuarios(1, payload)
  console.log(result);

  expect(result.data).toEqual(resp)
})

test('delete / aluno', async()=>{
  const resp = {msg: "Aluno apagado com sucesso"};
  axios.delete.mockResolvedValue({data:resp})

  const result = await validaApi.deleteUsuarios(1)
  console.log(result);

  expect(result.data).toEqual(resp)
})


