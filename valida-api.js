const axios = require('axios');

const baseUrl = 'http://localhost:8000'

async function principal() {

    const response = await axios.get(`${baseUrl}/`);
    console.log(response.data);
    return response.data;
}

async function postAlunos(payload) {
    const response = await axios.post(`${baseUrl}/alunos`, payload, {
      headers: { "Content-Type": "aplication/json" },
    });
  
    return response;
  }

async function getAlunos() {
  const response = await axios.get(`${baseUrl} `)

  return response
}

async function getAlunoById(payload){
  const response= await axios.get(`${baseUrl}/${payload}`, )

  return response
}

async function putUsuarios(payload){
  const response = await axios.put(`${baseUrl}/${payload}`)

  return response
}

async function deleteUsuarios(payload){
  const response = await axios.delete(`${baseUrl}/${payload}`)

  return response
}


module.exports = {principal, postAlunos, getAlunos, getAlunoById, putUsuarios, deleteUsuarios}