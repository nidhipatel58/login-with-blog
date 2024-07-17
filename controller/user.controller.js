let { userService } = require("../services");
const { createToken } = require("../middleware/auth");

let registered = async (req, res) => {
    try {
        console.log(req.body);
        let body = req.body;
        let user = await userService.registered(body)

        res.status(200).json({
            message: "User registered successfully!",
            user
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let getUser = async (req, res) => {
    try {
        console.log(req.body);
        let getuser = await userService.getUser();

        res.status(200).json({
            message: "Get all users success",
            getuser,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let deleteUser = async (req, res) => {
    try {
        console.log(req.params);
        let { id } = req.params;
        let deleted = await userService.deleteUser(id);

        res.status(200).json({
            message: "Delete user success!",
            deleted,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let updateUser = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let update = await userService.updateUser(id, body);
        console.log(update, "update");

        res.status(200).json({
            message: "Updated user success!!",
            update,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let Login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await userService.FindUser(email)

        if (!user) {
            throw new Error("user not found!")
        }
        if (user.password != password) {
            throw new Error("Password is invalid!")
        }

        let token=createToken({user})

        res.cookie("token", token);

        res.status(200).json({
            message: "Login Successfully:)",
        })

    } catch (err) { 
        res.status(500).json({
            message: err.message
        })
    }

}

module.exports = { registered, getUser, deleteUser, updateUser,Login};
