const express = require('express')
const routes = express.Router();

const authMiddleWare = require('./utils/authMiddleWare')

const UserController = require('./controllers/UserController')
const TodoController = require('./controllers/TodoController')

// ? Ao receber o id, temos que verificar no banco de dados se o usuário existe.
// ?    Se não existir, inserimos um novo usuário na tabela
// ? Retornamos a lista de to dos que o usuário tem

// ? Após isso, o usuário terá mais uma rota para criar um novo to do 
// ? e uma rota para deletar to dos.

// ! 1) CERTIFICAR DE QUE ROTAS ESTÃO DISPONÍVEIS APENAS PARA USUÁRIOS AUTENTICADOS

// ! RESPONSABILIDADES DA ROTA gettodos

// ? 1) Receber o ID do usuário do header de uma requisição do front end
// ?    e retornar todos os to dos daquele usuário.

routes.get('/gettodos', authMiddleWare.verify, UserController.getTodos)

// ! RESPONSABILIDADES DA ROTA createtodo

// ? 1) Quando o usuário pressionar o botão de criar to do, ele envia para o banco
// ?    de dados através do req.body o texto do todo que será salvo junto com seu id

routes.post('/createtodo', authMiddleWare.verify, TodoController.create)

// ! RESPONSABILIDADES DA ROTA deletetodo/:id
  
// ? 1) Se o usuário pressionar o botão de check, é enviado para o servidor o id
// ?    do todo e o id do usuario. Se o usuário for o dono desse todo, ele é deletado

routes.delete('/delete', authMiddleWare.verify, TodoController.delete)

// ! RESPONSABILIDADES DA ROTA createUser

//TODO routes.post('/createUser', UserController.create)

module.exports = routes;