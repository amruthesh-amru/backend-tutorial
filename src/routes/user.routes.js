import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

router.route("/register").post(
    //injected middleware to upload files like images(multer)
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "cover image",
            maxCount: 1
        }
    ]),
    registerUser)



export default router