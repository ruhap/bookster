import { Bookitem } from "@/components/book-item";
import { db } from "@/lib/db";
import { getServerAuthStatus } from "@/lib/session";
import { redirect } from "next/navigation";

export const getBookByUserId = async (id: string) => {
  return await db.book.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

const DashboardPage = async () => {
  const session = await getServerAuthStatus();
  if (!session) redirect("/");

  const books = await getBookByUserId(session.user.id);

  return (
    <main className="">
      <h1>Hello World from Dashboard</h1>

      <h2>Your books</h2>
      {books && books.map((book) => <Bookitem key={book.id} book={book} />)}
      {!books && <p>No books found</p>}
    </main>
  );
};

export default DashboardPage;
