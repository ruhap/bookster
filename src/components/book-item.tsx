import { Book } from "@prisma/client";

interface BookItemProps {
  book: Pick<Book, "id" | "name" | "createdAt" | "updatedAt">;
}

export const Bookitem = ({ book }: BookItemProps) => {
  return (
    <div key={book.id}>
      <h2>{book.name}</h2>
      <p>{book.createdAt.toString()}</p>
      <p>{book.updatedAt.toString()}</p>
    </div>
  );
};
