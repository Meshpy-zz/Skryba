export class Publication {
  id: string;
  author: string;
  name: string;
  title: string;
  publicationYear: string;
  magazine: string;
  points: string;


  constructor(id: string, author: string, name: string, title: string, publicationYear: string, magazine: string, points: string) {
    this.id = id;
    this.author = author;
    this.name = name;
    this.title = title;
    this.publicationYear = publicationYear;
    this.magazine = magazine;
    this.points = points;
  }

}
