/* this is also a higher order function wherein the requestHandler is passed as an argument */
const asyncHandler = (requestHandler) =>{
    ((req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    })
}
/* here a promise is returned wherein the if it is successful that is resolved the function 
arguement is executed and if rejected directly the errors are caught and handled by sending 
it to the middle ware by the way of next */
export {asyncHandler};












/* using the try catch method 
higher order function : it is a function that takes another function as an argument
higher order function can be treated as a variable */

/* there is another set of braces after the (fn) implies that the function taken
as an arguement can be resused in all the following functions */
/* matlab niche ke function mein ek function ko as arguement liya hai aur further use bhi kiya hai
so jo first function mein use kiya hai vo async chahiye isilye async keyword use kar diya */

/*const asynchandler = (fn)= async (req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
    }
}*/

/* the aforesaid can be used as a wrapper function which can we reused several times.*/