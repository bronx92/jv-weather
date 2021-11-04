import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';




@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ]
})
export class BookmarksModule { }
