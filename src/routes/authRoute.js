import { signup, login } from "../controllers/authController";

const authRoute = (app) => {
    app.route('/signup')
        .post(signup)

    app.route('/login')
        .post(login)
}

export default authRoute;