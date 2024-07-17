let { userSchema } = require("../models");

let registered = (body) => {
   console.log(body, "res");
   return userSchema.create(body)
}

let getUser = () => {
   return userSchema.find();
}

let FindUser = (email) => {
   return userSchema.findOne({ email })
}

let deleteUser = (id) => {
   return userSchema.findByIdAndDelete(id)
}

let updateUser = (id, body) => {
   return userSchema.findByIdAndUpdate(id, body)
}

module.exports = { registered, getUser, deleteUser, updateUser, FindUser }



