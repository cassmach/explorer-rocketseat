class UsersController {
/*  Boas Praticas, o controle tem no maximo 5 funções(metodos), se passar disso melhor separar os controllers.

    * index - Get para listar varios registros.
    * show - GET para exibir um registro espeficio.
    * create - POST para poder criar um registro
    * update - PUT para atualizar um registro
    * delete - DELETE para remover um registro
*/ 
    create(request, response) {
        const {name, email, password} = request.body;
    
   

         response.status(201).json({name, email, password})
    }

}

module.exports = UsersController;