const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("Listening on port:", 3000);
});

app.get("/hello",(request,response)=>{
    const status = {
        "Instancia":"Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Seccion":"Seccion A",
        "Periodo":"2do Semestre 2024",
        "Estudiante":"Pablo García González - 201901107"
    };
    response.send(status);
});
app.get("/",(request,response)=>{
    response.status(200);
});