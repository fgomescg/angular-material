import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing/book-routing.module';
import { MaterialModule } from './../material/material.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDataComponent } from './book-details/book-data/book-data.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookListComponent, BookDetailsComponent, BookDataComponent, BookCreateComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
