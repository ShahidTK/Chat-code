import { Router } from "express";   
import {loginUser, registerUser,logoutUser, getCurrentUser, checkAuth} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const userRouter = Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.get("/check", protectRoute, checkAuth);
userRouter.route("/getuserid").get(protectRoute, getCurrentUser)




export default userRouter;
