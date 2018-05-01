import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService }  from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

	@Input() post: Post;

  constructor(
	  private route: ActivatedRoute,
	  private postService: PostService,
	  private location: Location
  ) { }

  ngOnInit(): void {
  	this.getPost();
  }

  getPost(): void{
  	const title = this.route.snapshot.paramMap.get('title');
    this.postService.getPost(title).subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.postService.updatePost(this.post)
     .subscribe(() => this.goBack());
  }

}
