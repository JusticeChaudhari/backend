import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN, //* implies for now all the requests are allowed
    credentials:true,
}))
app.use(express.json({limit:"64kb"}));
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(express.cookieParser());
/* app.use : is a middleware i.e, a function that intercepts the request and modifies it
   express.json is a middleware that parses incoming request bodies in a middleware before your route handlers.
   limit is set to manage the maximum request body size to 64kb  */

/* express.urlencoded() is used to ecode the routes in a standardized format
Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option */

/* express.static() is used to serve static files */
/* express.cookieParser() is used to parse cookies manage access, read the cookies */
export {app};