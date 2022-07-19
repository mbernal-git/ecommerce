import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  blogs;
  errorMsg;

  constructor(private _blogService: BlogService) { 

  }

  ngOnInit() {
    this._blogService.getRecent()
      .subscribe(
        data => this.blogs = data,
        error => this.errorMsg = error
      );
  }

}