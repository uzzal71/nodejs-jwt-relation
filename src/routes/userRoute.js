import { 
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
 } from "../controllers/userController";

 import { verify } from "../middlewares/verify";

const userRoute = (app) => {

    app.route('/user')
        // Get All User
        .get(verify, getUsers)

    app.route('/user/:userId')
        // Get Specific User
        .get(verify, getUserWithId)

        // Update Specific User
        .put(verify, updateUser)

        // Delete Specific User
        .delete(verify, deleteUser);
}

export default userRoute;