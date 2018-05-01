import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AUTHORS } from '../author-list';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

	authors = AUTHORS;

	selectedAuthor: Author;
  constructor() { }

  ngOnInit() {
  }

  onSelect(author: Author): void {
  	this.selectedAuthor = author;
  }

}
