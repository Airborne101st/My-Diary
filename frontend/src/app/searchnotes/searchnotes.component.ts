import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-searchnotes',
  templateUrl: './searchnotes.component.html',
  styleUrls: ['./searchnotes.component.css']
})
export class SearchnotesComponent implements OnInit {
  searchForm: FormGroup;

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
    console.log(this.searchForm.value);
    return this.service.find(this.searchForm.value).subscribe((response)=>{
      console.log("in success");
      console.log(response);
      
      
    },
    error =>{ "In error"});
    
  }



}
