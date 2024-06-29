import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/Message.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  constructor(private UserService: UserService) {}
  @Input() message!: Message;
  messageList: Message[] = [];
  selectedMessage?: Message;
  newForm: boolean = false;
  date: string = new Date().toLocaleDateString();
  textSearch = '';
  title="ההודעות שלי"
  loading:boolean=false

  ngOnInit() {
    this.UserService.getUserList().subscribe({
      next: (res) => { console.log(res), this.messageList = res },
      error: (error) => { alert("o no") }
    })
  }



  addNewMessage() {
    this.newForm = true;
  }



  addMessage(message: Message) {
    this.loading=true
    this.UserService.insertMessage(message).subscribe({
      next: (res: Message) => {
        this.messageList.push(res);
        this.loading=false
        this.newForm = false;

        alert("ההודעה נשמרה בהצלחה")
        console.log('Server response:', res);

      } ,
      error: (error) => {"שמירה נכשלה" }
     
    });
  }
  
  
    
    
  selectedMessagee(message: Message) {
    this.selectedMessage = message;
    this.newForm = false;
  }


  saveMessage(selectedMessage: Message) {
    if (this.selectedMessage) {
      const index = this.messageList.findIndex(message => message.id === this.selectedMessage!.id);

      if (index !== -1) {
        this.messageList[index] = {
          id: this.selectedMessage.id,
          userId: this.selectedMessage.userId,
          title: selectedMessage.title,
          body: selectedMessage.body
        };
      }

      this.selectedMessage = undefined;
    }
  }
  
  filterMessages() {
    if (this.textSearch.length === 0) {
      return this.messageList;
    }
    return this.messageList.filter((msg) => msg.title.includes(this.textSearch));
  }
  



}