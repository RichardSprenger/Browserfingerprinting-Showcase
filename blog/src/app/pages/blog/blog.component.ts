import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog!: Blog;
  contentLoaded: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogService.getBlogById(params['id']).subscribe(blog => {
        // if (blog == undefined)
        //   this.router.navigate(['not-found']);
        if (blog != undefined) {
          this.blog = blog;
          this.contentLoaded = true;
        }
        }
      );
    });
  }

}
