import "../../loadEnvirontment.js";
import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";

// eslint-disable-next-line new-cap
const usersRouter = express.Router();

usersRouter.post("/login", loginUser);
usersRouter.post("/register", registerUser);

export default usersRouter;
