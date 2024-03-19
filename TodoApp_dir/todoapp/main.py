# fastapi_neon/main.py

from fastapi import FastAPI

app = FastAPI(title="Hello World API", 
    version="0.0.1")


@app.get("/")
def read_root():
    return {"Hello": "World"}