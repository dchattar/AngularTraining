import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from './auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    ,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent }
    ]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
