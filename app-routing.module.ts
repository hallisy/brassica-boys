import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NickComponent } from './nick/nick.component';
import { RyanComponent } from './ryan/ryan.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
/*import { AppComponent } from './app.component';*/

const routes: Routes = [
	{ path: '', redirectTo: '/posts', pathMatch: 'full' },
	{ path: 'detail/:title', component: PostDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'Nick', component: NickComponent },
  { path: 'Ryan', component: RyanComponent },
  { path: 'edit', component: PostEditorComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
