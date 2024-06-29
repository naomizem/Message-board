import { Component, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Message } from 'src/app/models/Message.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  @Input() message!: Message
  @Output() saveMessage = new EventEmitter<Message>
  messageForm!: FormGroup;
  title:string="הודעה חדשה"

  //כאשר הקמפוננטה עולה
  constructor() {
    this.messageForm = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      body: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(300)])
    }
    );
   
  }

  ngOnChanges() {
    
   if(this.message!=null){
    this.title="עריכת הודעה מספר/"+this.message.id
    this.messageForm.setValue({
      title:this.message.title,
      body:this.message.body
    })
   }
  }
  
  

  subm(event: any) {
    if (this.messageForm.valid) {
      this.saveMessage.emit(this.messageForm.value as Message)

      this.messageForm.reset();
    }
    else {
      Object.keys(this.messageForm.controls).forEach((key) => {
        this.messageForm.controls[key].markAllAsTouched();
      })
    }
  }
 
  

}



