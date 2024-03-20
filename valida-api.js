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

module.exports = {principal, postAlunos}