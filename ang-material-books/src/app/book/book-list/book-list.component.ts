import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../../_interfaces/book.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['title', 'company', 'edition', 'publishYear', 'value', 'detalhes', 'atualizar', 'deletar'];

  public dataSource = new MatTableDataSource<Book>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService, private errorService: ErrorHandlerService, private router: Router) { }
  ngOnInit() {
    this.getAllOwners();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    this.repoService.getData('api/book')
    .subscribe(res => {
      this.dataSource.data = res as Book[];
    },
    (error) => {
      this.errorService.handleError(error);
    });
  }
  public redirectToDetails = (id: string) => {
    let url: string = `/book/details/${id}`;
    this.router.navigate([url]);
  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

}
