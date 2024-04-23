const express =  require("express");
const app= express();

app.use ((req,res,next)=>{
    res.status (200);
    next();
});

app. get ("/", (req,res)=>{
    const usuario ={
        metodo:"get",
        nombre:"B",
        role:"C",
    };
    res. json(usuario);
});

app. post("/gordo", (req,res)=>{
    res. send("hola haniel");
});

app. put("/gordo", (req,res)=>{
    res. send("hola Fernando");
});


app. listen(8000, ()=> {
    console.log("Example app listening on port 8000!");
});