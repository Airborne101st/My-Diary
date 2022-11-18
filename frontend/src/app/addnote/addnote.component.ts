import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { NoteServiceService } from '../note-service.service';
import { Model } from '../model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {
  addForm: FormGroup
  model = new Model()
  today: number = Date.now();
  data: any


  constructor(private service: NoteServiceService,
              private snack: MatSnackBar) {
    this.addForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  get title(){
    return this.addForm.get('title')
  }

  get content(){
    return this.addForm.get('content')
  }


  saveNote(){
    if(this.title?.value!="" && this.content?.value!=""){

      this.model.title = this.title?.value
      this.model.content = this.content?.value
      this.model.time = this.today
    
  
      console.log(this.model);
  
      this.service.save(this.model).subscribe(data=> 
        {console.log("good")
        
        this.snack.open("Saved", "close", {duration:3000})
        this.addForm.reset()
        
      })

    }

    else{
      this.addForm.invalid
    }
  

    
  }




 


}

