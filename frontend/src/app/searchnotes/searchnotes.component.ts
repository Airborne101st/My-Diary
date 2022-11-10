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
  word:string = ""
  message:string = ""

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
    this.word = this.query?.value
    console.log(this.word);
    
    this.message = ""
    return this.service.search(this.word).subscribe(data=>
      {
        this.notes = data
        console.log(this.notes.length);
        if (this.notes.length==0){
          console.log("whoops");
          
          this.message="No matches found"
        }
        
      })

      
  }
 


}
