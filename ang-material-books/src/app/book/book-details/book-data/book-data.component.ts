import { Book } from './../../../_interfaces/book.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {
  @Input() public book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
