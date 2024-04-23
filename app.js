const express =  require("express");
const app= express();

app.use ((req,res,next)=>{
    res.status (200);
    next();
});

app. get ("/", (req,res)=>{
    const usuario ={
        metodo:"get",
        nombre:"Desarrollo web",
        Practica:"2.1",
    };
    res. json(usuario);
});

app. post("/2", (req,res)=>{
    res.send("hola haniel");
});

app. put("/1", (req,res)=>{
    res.send("hola Fernando");
});


app. listen(8000, ()=> {
    console.log("Example app listening on port 8000!");
});