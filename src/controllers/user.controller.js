import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from '../models/user.model.js'
const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message: "user registered successfully"
    // })
    const { fullName, email, username, password } = req.body
    console.log(email);
    if (
        [fullName, username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "all fileds are required")
    }
    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }
})


export { registerUser }