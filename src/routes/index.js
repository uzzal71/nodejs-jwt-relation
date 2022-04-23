import authRoute from "./authRoute";
import userRoute from "./userRoute";
import categoryRoute from "./categoryRoute";
import postRoute from "./postRoute";

const routes = (app) => {
    authRoute(app);
    userRoute(app);
    categoryRoute(app);
    postRoute(app);
};

export default routes;