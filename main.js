import express from "express";
import routers from "./source/controllers/index.controllers.js";
import logger from "./source/helper/midWare/logger.js"
const app = express();
app.use(express.json());
app.use(logger);
app.use('/user', routers.userRouter);


// let allUsers={
//   userData: [{id: 1, name:"Ahmed"},
//     {id: 2, name:"Ali"}]};

app.listen(5000, ()=>{
    console.log("it works on port 5000");
});