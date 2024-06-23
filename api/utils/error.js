export const errorHandler = (statusCode,message)=>{
    const error = new Error()
    error.statusCode = message;
    return error;
};