import { Router } from "express";
import { User } from "../controllers";
import { uploads } from "../middlewares";

const user: Router = Router();

user.post("/profile-pic", uploads.single("image"),User.profilePic);

export default user;    