from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from data import books_db
from routes import auth_router


class Author(BaseModel):
    id: int
    name: str
    bio: str

class Book(BaseModel):
    id: int
    title: str
    year_published: int
    genre: str
    author: Author




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Vite default
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")

@app.get("/")
def read_root():
    return {"service": "Gateway"}

@app.get("/api/book", response_model=list[Book])
def list_books():
    return books_db

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}