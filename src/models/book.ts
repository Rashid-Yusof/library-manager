export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    publicationYear: number;
    genre: string;
    copies: number;
    available: boolean;
}