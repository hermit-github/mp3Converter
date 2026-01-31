import React, { useEffect } from "react";
import z from "zod";
import { BookSchema, type Book } from "../schemas";
import { BookCard } from "./BookCard";
import { useFetch } from "@/hooks/useFetch";

type BookListProps = object

const BookList: React.FC<BookListProps> = () => {
  const {fetch} = useFetch();
  const [books, setBooks] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch("/api/book");

      const validatedBooks = z.array(BookSchema).parse(data);
      
      setBooks(validatedBooks);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchBooks()},[]);

  return (
    <div className="books-container">
      <h2 className="text-3xl font-bold underline">Book List</h2>
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
