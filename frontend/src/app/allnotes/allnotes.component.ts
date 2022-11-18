import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { NoteServiceService } from '../note-service.service';
import { DatePipe } from '@angular/common';
import { Status } from '../../status';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {
  notes:Model[] = []
  id:number = 0



  constructor(private service: NoteServiceService ) { }

  ngOnInit(): void {
    this.showNotes()
  }

  showNotes(){
    this.service.getnotes().subscribe(data=>
      {
        this.notes = data
        
      })
  }

  deleteNote(note: Model){
    this.id = note.time

    this.service.delete(this.id).subscribe(data=>
      {
        console.log(data);
        window.location.reload()
      })

  }

}

