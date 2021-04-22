import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criar
 * PUT = Alterar
 * DELETE = deletar
 * PATCH = Alterar uma info especifica
 */ 

app.get("/", (request, response) => {
return response.json({
  message: "Ola NLW 05"
});
});

app.post("/", (request, response) => {
  return response.json({ message: "usuario cadastrado com sucesso"});
});


app.listen(3333, () => console.log("Server is running on port 3333"));