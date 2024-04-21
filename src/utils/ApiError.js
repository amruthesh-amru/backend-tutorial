class ApiError extends Error {
    constructor(
        statuscode,
        message = 'Something went wrong',
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        //avoid if not understood
        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }