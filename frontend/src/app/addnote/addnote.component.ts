import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
  }

  saveNote(model: {title:string, content:string}){
    this.noteService.save(model).subscribe((data)=>{})
    console.log(model);
    
    
  }


}
