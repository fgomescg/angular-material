import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing/book-routing.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    MaterialModule
  ]
})
export class BookModule { }
