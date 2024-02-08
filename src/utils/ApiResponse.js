class ApiResponse {
    constructor( statusCode, data, message = "Success" ){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message
        this.success  = statusCode<400 
        /* 400 se kam kyuki 100 - 400 is success ke codes where as 400-599 are error ke codes */

    }
}
export {ApiResponse};