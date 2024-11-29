import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Book } from '../Models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Guns of August',
      description: 'Barbara W. Tuchman’s Pulitzer Prize-winning account of the outbreak of World War I.',
      price: 420,
      image: 'assets/The Guns of August.jpg',
      category: 'Books'
    },
    {
      id: 2,
      name: 'All Quiet on the Western Front',
      description: 'Erich Maria Remarque’s harrowing tale of a young German soldier during World War I.',
      price: 380,
      image: 'assets/All Quiet on the Western Front.jpg',
      category: 'Books'
    },
    {
      id: 3,
      name: 'The Nightingale',
      description: 'Kristin Hannah’s story of two sisters resisting the Nazi occupation of France in World War II.',
      price: 450,
      image: 'assets/The Nightingale.jpg',
      category: 'Books'
    },
    {
      id: 4,
      name: 'Band of Brothers',
      description: 'Stephen E. Ambrose’s true story of the men in Easy Company during World War II.',
      price: 520,
      image: 'assets/War and Peace.jpg',
      category: 'Books'
    },
    {
      id: 5,
      name: 'War and Peace',
      description: 'Leo Tolstoy’s epic masterpiece depicting the Napoleonic Wars and Russian society.',
      price: 600,
      image: 'assets/War and Peace.jpg',
      category: 'Books'
    },
    {
      id: 6,
      name: 'The Longest Day',
      description: 'Cornelius Ryan’s detailed narrative of the D-Day invasion of Normandy.',
      price: 490,
      image: 'assets/The Longest Day.jpg',
      category: 'Books'
    },
    {
      id: 7,
      name: 'Unbroken',
      description: 'Laura Hillenbrand’s biography of Louis Zamperini, a World War II bombardier and POW survivor.',
      price: 400,
      image: 'assets/Unbroken.jpg',
      category: 'Books'
    },
    {
      id: 8,
      name: 'The Things They Carried',
      description: 'Tim O’Brien’s powerful collection of interconnected stories about the Vietnam War.',
      price: 350,
      image: 'assets/The Things They Carried.jpg',
      category: 'Books'
    },
    {
      id: 9,
      name: 'Rise and Kill First',
      description: 'Ronen Bergman’s investigative account of Israel’s targeted assassinations.',
      price: 520,
      image: 'assets/Rise and Kill First.jpg',
      category: 'Books'
    },
    {
      id: 10,
      name: 'Red Storm Rising',
      description: 'Tom Clancy’s thrilling depiction of a hypothetical World War III scenario.',
      price: 480,
      image: 'assets/Red Storm Rising.png',
      category: 'Books'
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book): Observable<Book> {
    this.books.push(book);
    return of(book);
  }
}

