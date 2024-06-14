import { Book } from "../book/Book";

export type Category = {
  books?: Array<Book>;
  categoryName: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
};
