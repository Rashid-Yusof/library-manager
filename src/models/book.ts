import { Genre } from './genre';

export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    publicationYear: number;
    genre: Genre;
    copies: number;
    isAvailable: boolean;
}