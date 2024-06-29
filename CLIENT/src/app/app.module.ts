

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AnimateModule} from 'primeng/animate';
import { TableModule } from 'primeng/table';
import { MessageListComponent } from './components/message-list/message-list.component';
import { HttpClientModule} from '@angular/common/http'
import { UserService } from './services/user.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    HomePageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    AnimateModule,
    TableModule,
    HttpClientModule,
    FileUploadModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
