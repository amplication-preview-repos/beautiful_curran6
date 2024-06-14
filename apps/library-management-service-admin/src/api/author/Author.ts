import { Book } from "../book/Book";

export type Author = {
  books?: Array<Book>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
