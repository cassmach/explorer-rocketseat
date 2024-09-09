


const  { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const AppError = require("../utils/AppError");

const usersRoutes = Router();



const usersController = new UsersController();

usersRoutes.post("/",  usersController.create)


module.exports = usersRoutes;