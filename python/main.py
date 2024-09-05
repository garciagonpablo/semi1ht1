from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {
        "Instancia":"Instancia #1 - API #1",
        "Curso": "Seminario de Sistemas 1",
        "Seccion":"Seccion A",
        "Periodo":"2do Semestre 2024",
        "Estudiante":"Pablo García González - 201901107"
    }