import { type Book } from "../schemas";

export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Year: {book.publishedDate}</p>
      <p>Published: {book.publishedDate}</p>
      <div className="author-info">
        <h3>Author: {book.author.name}</h3>
        {book.author.bio && <p>Bio: {book.author.bio}</p>}
      </div>
    </div>
  );
};
