export class Blog {
  id: string;
  title: string;
  article: string;
  image: string;
  area: string;
  status: string;
  author: string;

  constructor(
    id: string,
    title: string,
    article: string,
    image: string,
    area: string,
    status: string,
    author: string
  ) {
    this.id = id;
    this.title = title;
    this.article = article;
    this.image = image;
    this.area = area;
    this.status = status;
    this.author = author;
  }
}
