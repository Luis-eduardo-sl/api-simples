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


})


