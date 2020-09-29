import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Location } from '@angular/common';
import { BookForCreation } from '../../_interfaces/book-for-creation.model';
import { Author } from '../../_interfaces/author.model';
import { Subject } from '../../_interfaces/subject.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  public bookForm: FormGroup;
  public authors: Author[];
  public subjects: Subject[];
  public bookValue = 0;

  constructor(private location: Location, private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      company: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      value: new FormControl(this.bookValue, [Validators.required]),
      publishYear: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      bookAuthors: new FormControl(null),
      bookSubjects: new FormControl(null)
    });
    this.getAllAuthors();
    this.getAllSubjects();
  }

  public getAllAuthors = () => {
    let apiAddress: string = 'api/author';
    this.repository.getData(apiAddress).subscribe(
      (res) => {
        this.authors = res as Author[];
      },
      (error) => {
        this.errorHandler.handleError(error);
        //this.errorMessage = this.errorHandler.errorMessage;
      }
    );
  };

  public getAllSubjects = () => {
    let apiAddress: string = 'api/subject';
    this.repository.getData(apiAddress).subscribe(
      (res) => {
        this.subjects = res as Subject[];
      },
      (error) => {
        this.errorHandler.handleError(error);
        //this.errorMessage = this.errorHandler.errorMessage;
      }
    );
  };

  updateBRLAmount(event){
    this.bookValue = event.target.value;
  }

  public onCancel = () => {
    this.location.back();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.bookForm.controls[controlName].hasError(errorName);
  }

  public createBook = (bookFormValue) => {
    if (this.bookForm.valid) {
      this.executeBookCreation(bookFormValue);
    }
  }

  private executeBookCreation = (bookFormValue) => {
    const book: BookForCreation = {
      title: bookFormValue.title,
      company: bookFormValue.company,
      edition: Number(bookFormValue.edition),
      value:  Number(this.bookValue),
      publishYear: bookFormValue.publishYear,
      bookAuthors:  this.transformToBookAuthorModel(bookFormValue.bookAuthors),
      bookSubjects: this.transformToBookSubjectModel(bookFormValue.bookSubjects)
    }
    const apiUrl = 'api/book';
    this.repository.create(apiUrl, book)
      .subscribe(res => {

        this.location.back();
      },
      (error => {
        this.location.back();
        //this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

  private transformToBookAuthorModel(ids) {
    return ids.map((id) => {
      return { "authorId": id }
    });
  }

  private transformToBookSubjectModel(ids) {
    return ids.map((id) => {
      return { "subjectId": id }
    });
  }

}
