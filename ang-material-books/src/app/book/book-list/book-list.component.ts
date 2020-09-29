import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../../_interfaces/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public displayedColumns = ['title', 'company', 'edition', 'publishYear', 'value', 'detalhes', 'atualizar', 'deletar'];

  public dataSource = new MatTableDataSource<Book>();
  constructor(private repoService: RepositoryService) { }
  ngOnInit() {
    this.getAllOwners();
  }
  public getAllOwners = () => {
    this.repoService.getData('api/book')
    .subscribe(res => {
      this.dataSource.data = res as Book[];
    })
  }
  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

}
