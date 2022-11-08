import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { NoteServiceService } from '../note-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {
  notes:Model[] = []

  constructor(private service: NoteServiceService ) { }

  ngOnInit(): void {
    this.showNotes()
  }

  showNotes(){
    this.service.getnotes().subscribe(data=>
      {
        this.notes = data
        console.log(data);
        
      })
  }

}

