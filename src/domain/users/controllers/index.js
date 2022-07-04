const CreateUserController = require("./CreateUserController");
const FindAllUserController = require("./FindAllUserController");
const FindOneUserController = require("./FindOneUserController");
const FindByEmailUserController = require("./FindByEmailUserController");
const DeleteUserController = require("./DeleteUserController");
const UpdateUserController = require("./UpdateUserController");

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const findOneUserController = new FindOneUserController();
const findByEmailUserController = new FindByEmailUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

module.exports = {
    createUserController,
    findAllUserController,
    findOneUserController,
    findByEmailUserController,
    deleteUserController,
    updateUserController,
};
