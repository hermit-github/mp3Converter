from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from data import books_db


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


@app.get("/")
def read_root():
    return {"service": "Gateway"}

@app.get("/api/book", response_model=list[Book])
def list_books():
    return books_db

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}