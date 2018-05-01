import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { POSTS } from './mock-posts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

@Injectable()
export class PostService {

	private postsUrl = 'api/posts';
	

  constructor(
  	private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
  	return of(POSTS);
  	/* get post from http server
  	return this.http.get<Post[]>(this.postsUrl).pipe(catchError(this.handleError('getPosts', [])));
  	*/
  }

  getPost(title: string): Observable<Post> {
  	return of(POSTS.find(post => post.title === title));
  	/* http integration
  	const url = `${this.postsUrl}/${title}`;
  	return this.http.get<Post>(url);
  	 Error catching .pipe(catchError(this.handleError<Post>(`getPosts title=$title`)))*/
  }


  /** PUT: update the hero on the server */
	updatePost (post: Post): Observable<any> {
	  return this.http.put(this.postsUrl, post, httpOptions);
	  /* Error catching .pipe(catchError(this.handleError<any>('updateHero'))) */
	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

	    // send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}
}
