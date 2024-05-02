//professional method
const asyncHandler = (func) => {
    return (req, res, next) => {
        Promise.resolve(
            func(req, res, next)
        ).catch(
            () => next(err)
        )
    }
}

export { asyncHandler }


//other method using try catch

// const asyncHandler = (func) => async (req, res, next) {

//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }

// }
