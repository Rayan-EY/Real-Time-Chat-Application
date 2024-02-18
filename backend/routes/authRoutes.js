import express from "express"
import {login, logout, signup} from "../controllers/authController.js"

const Router=express.Router();

Router.post("/signup",signup)
Router.post("/login",login)
Router.post("/logout",logout)

export default Router;