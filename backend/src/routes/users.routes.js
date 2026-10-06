import {Router} from "express" ;
import { addtoHistory, getUserHistory, login, register } from "../controller/user.controller.js";

const router = Router() ;

router.route("/login").post(login)

router.route("/register").post(register)

router.route("/add_to_activity").post(addtoHistory)

router.route("/get_all_activity").post(getUserHistory)

export default router ;