import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = blogs;

  constructor() { }

  getAllBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return of(this.blogs.find(blog => blog.id == id));
  }
}

export interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
  date: Date;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Blog 1',
    body: 'Qui do dolore dolore fugiat voluptate. Amet dolor anim in quis esse. Amet proident incididunt esse qui sint cupidatat dolor sint enim duis in ut cupidatat dolore. Aliquip elit Lorem tempor anim anim voluptate ut. Veniam do laborum deserunt anim adipisicing magna minim elit incididunt amet dolor officia.',
    author: "John Doe",
    date: new Date(2020, 1, 1)
  },
  {
    id: 2,
    title: 'Blog 2',
    body: 'Non deserunt eu elit aute quis fugiat fugiat ullamco consectetur ipsum in nisi. Elit sunt anim incididunt nostrud reprehenderit nisi sunt. Ex do quis nostrud velit eu culpa laborum aliqua commodo quis. Duis aute eiusmod commodo culpa labore esse aliqua culpa ad ullamco. Fugiat incididunt proident veniam ea ad sit nulla eu adipisicing irure consequat culpa irure ea. Eiusmod officia ea ex minim labore sit.',
    author: "Max Mustermann",
    date: new Date(2022, 6, 14)
  },
  {
    id: 3,
    title: 'Blog 3',
    body: 'Non deserunt eu elit aute quis fugiat fugiat ullamco consectetur ipsum in nisi. Elit sunt anim incididunt nostrud reprehenderit nisi sunt. Ex do quis nostrud velit eu culpa laborum aliqua commodo quis. Duis aute eiusmod commodo culpa labore esse aliqua culpa ad ullamco. Fugiat incididunt proident veniam ea ad sit nulla eu adipisicing irure consequat culpa irure ea. Eiusmod officia ea ex minim labore sit.',
    author: "Rainer Zufall",
    date: new Date(2022, 5, 21)
  },
  {
    id: 4,
    title: 'Blog 4',
    body: 'Non deserunt eu elit aute quis fugiat fugiat ullamco consectetur ipsum in nisi. Elit sunt anim incididunt nostrud reprehenderit nisi sunt. Ex do quis nostrud velit eu culpa laborum aliqua commodo quis. Duis aute eiusmod commodo culpa labore esse aliqua culpa ad ullamco. Fugiat incididunt proident veniam ea ad sit nulla eu adipisicing irure consequat culpa irure ea. Eiusmod officia ea ex minim labore sit.',
    author: "Anna Theke",
    date: new Date(2020, 1, 1)
  },
  {
    id: 5,
    title: 'Blog 5',
    body: 'Non deserunt eu elit aute quis fugiat fugiat ullamco consectetur ipsum in nisi. Elit sunt anim incididunt nostrud reprehenderit nisi sunt. Ex do quis nostrud velit eu culpa laborum aliqua commodo quis. Duis aute eiusmod commodo culpa labore esse aliqua culpa ad ullamco. Fugiat incididunt proident veniam ea ad sit nulla eu adipisicing irure consequat culpa irure ea. Eiusmod officia ea ex minim labore sit.',
    author: "Hans A. Bier",
    date: new Date(2020, 1, 1)  }
]
