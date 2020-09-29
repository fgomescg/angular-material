import { Component, OnInit } from '@angular/core';
import { Book } from '../../_interfaces/book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../../shared/repository.service';
import { ErrorHandlerService } from './../../shared/error-handler.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Book;
  public showAccounts;

  constructor(private repository: RepositoryService, private router: Router,
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getBookDetails();
  }

  private getBookDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/book/${id}`;

    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.book = res as Book;
    },
    (error) =>{
      this.errorHandler.handleError(error);
    })
  }
}
