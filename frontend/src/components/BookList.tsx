import React, { useEffect } from "react";
import z from "zod";
import { BookSchema, type Book } from "../schemas";
import { BookCard } from "./BookCard";

type BookListProps = object

const BookList: React.FC<BookListProps> = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/book");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Book[] = await response.json();

      const validatedBooks = z.array(BookSchema).parse(data);
      
      setBooks(validatedBooks);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchBooks()}, []);

  return (
    <div className="books-container">
      <h2>Book List</h2>
      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {books.map((book) => (
          <BookCard key={book.id} book={book}/>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
