'use strict';

// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to 
// take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole 
// organizer profile thing.

export class BlogPost {
  protected _authorName: string;
  protected _title: string;
  protected _text: string;
  protected _publicationDate: string;

  constructor (title: string, authorName: string, publicationDate: string, text: string) {
    this._authorName = authorName;
    this._title = title;
    this._text = text;
    this._publicationDate = publicationDate;
   }
}

// let  blogPost1 = new BlogPost('Lorem Ipsum', 'John Doe', '2000.05.04.', 'Lorem ipsum dolor sit amet.');
// console.log(blogPost1);

// let  blogPost2 = new BlogPost('Wait but why', 'Tim Urban', '2010.10.10.', 'A popular long-form, stick-figure-illustrated blog about almost everything.');
// console.log(blogPost2);

// let  blogPost3 = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trumput why', 'William Turton', '2017.03.28', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');
// console.log(blogPost3);