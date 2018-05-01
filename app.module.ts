import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AuthorsComponent } from './authors/authors.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './post.service';
import { AppRoutingModule } from './/app-routing.module';
import { NickComponent } from './nick/nick.component';
import { RyanComponent } from './ryan/ryan.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthorsComponent,
    PostDetailComponent,
    NickComponent,
    RyanComponent,
    PostEditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
