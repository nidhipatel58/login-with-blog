let express=require("express");
let route=express.Router();
let {userController}=require("../controller");
const { isLogin } = require("../middleware/auth");




route.post("/register",isLogin,userController.registered)
route.get("/get",isLogin,userController.getUser)
route.delete("/delete/:id",userController.deleteUser)
route.put("/update/:id",userController.updateUser)


//login
route.post("/login",userController.Login)



module.exports=route;