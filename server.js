require("dotenv").config();
let http = require("http");
let express = require("express");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
let app = express();
let cors = require("cors");
const cookieParser = require("cookie-parser");


//cookie-parser
app.use(cookieParser());

//cors
app.use(
   cors({
      origin: "*"
   })
)

app.set("view engine", "ejs");

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/v1", routes)

app.get("/", (req, res) => {
   res.render("index");
});


//Database connection:-
dbConnect();

//Server setupo:-
http.createServer(app).listen(process.env.PORT, (req, res) => {
   console.log(`Server started on port ${process.env.PORT}`);
})