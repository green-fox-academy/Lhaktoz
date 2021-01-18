'use strict';

import { BlogPost } from '../../day-03/blog-post';

class Blog {
  protected _listOfBlogs: BlogPost[] = [];

  public add(blogpost: BlogPost) : void {
    this._listOfBlogs.push(blogpost);
  }

  public delete(int: number): void {
    this._listOfBlogs.splice(int,1);
  }

  public update(int: number, BlogPost: BlogPost): void {
    this._listOfBlogs.splice(int, 1, BlogPost);
  }
}

let myBlog = new Blog();
let  blogPost1 = new BlogPost('Lorem Ipsum', 'John Doe', '2000.05.04.', 'Lorem ipsum dolor sit amet.');


let  blogPost2 = new BlogPost('Wait but why', 'Tim Urban', '2010.10.10.', 'A popular long-form, stick-figure-illustrated blog about almost everything.');


let  blogPost3 = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trumput why', 'William Turton', '2017.03.28', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');
console.log(blogPost3)


myBlog.add(blogPost1)
myBlog.add(blogPost2)
myBlog.add(blogPost3)

console.log(myBlog);
myBlog.update(2,blogPost3);
console.log(myBlog);
myBlog.delete(2);
console.log(myBlog);
