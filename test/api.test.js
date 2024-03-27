const request = require("supertest");
const baseUrl = "http://127.0.0.1:8000";

describe('GET /alunos', () => {
    const novoAluno = {
        nome: "Fulano",
        cidade : "Caraguatatuba"
    }

    beforeAll(async () => {
        await request(baseUrl).post("/alunos").send(novoAluno)
    })

    afterAll(async () =>{
        const response = await request(baseUrl).get("/alunos")
        response.body.alunos.forEach(async (aluno) => {
            await request(baseUrl).delete("/alunos").query({ id: aluno.id})
        })
    })

    it('Deve retornar status 200', async ()=> {
        const response = await request(baseUrl).get('/alunos')
        expect(response.statusCode).toBe(200)
    })

    it('Deve retornar o aluno criado', async() =>{
        const response = await request(baseUrl).get('/alunos')
        console.log(response.body);
        expect(response.body.alunos.length >= 1).toBe(true)   
    })
});


describe('POST /alunos', ()=>{
    const novoAluno = {
        nome: "Fulano",
        cidade : "Caraguatatuba"
    }

    afterAll(async () =>{
        const response = await request(baseUrl).get('/alunos')
        response.body.alunos.forEach(async (aluno) =>{
            await request(baseUrl).delete('/alunos').query({id: aluno.id})
        })
    })

    it('Deve adicionar um novo aluno', async ()=>{
        const response = await request(baseUrl).post('/alunos').send(novoAluno)
        expect(response.statusCode).toBe(201)
        const alunoIncluido = response.body.aluno
        expect(alunoIncluido.nome).toBe(novoAluno["nome"])
        expect(alunoIncluido.cidade).toBe(novoAluno["cidade"])

    })
})