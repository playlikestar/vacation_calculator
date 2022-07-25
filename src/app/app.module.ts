import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent } from './students-list/student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { HeaderComponent } from './header/header.component';
import { Student } from './students-list/student/student.model';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EditModalComponent } from './edit-modal/edit-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsListComponent,
    HeaderComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
