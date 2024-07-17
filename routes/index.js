let express=require("express");
let routes=express.Router();
let userRoute=require("./user.route");
let postRoute=require("./post.route")


routes.use("/user",userRoute);
routes.use("/post",postRoute);


module.exports=routes;