import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from '../model';
import { NoteServiceService } from '../note-service.service';


@Component({
  selector: 'app-searchnotes',
  templateUrl: './searchnotes.component.html',
  styleUrls: ['./searchnotes.component.css']
})
export class SearchnotesComponent implements OnInit {
  searchForm: FormGroup;
  notes: Model[] = []

  constructor(private service:NoteServiceService) 
  {
    this.searchForm = new FormGroup({
    query: new FormControl('', [Validators.required])
  })
 }

  ngOnInit(): void {
  }


  get query(){
    return this.searchForm.get('query')
  }

  askQuery(){
    return this.service.getnotes().subscribe(data=> 
      {
        this.notes = data
      })
    
  }
 


}
