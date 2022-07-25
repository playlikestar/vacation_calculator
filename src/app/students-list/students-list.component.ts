import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { Student } from './student/student.model';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @Input() students:Student[]=[];
@Output() editModalEvent=new EventEmitter<{student:Student,index:number}>;

  constructor() { }



  editModal(student:Student,index:number){
this.editModalEvent.emit({student:student,index:index});
  }
  ngOnInit(): void {}

  deleteStudent(student:Student){
    if(confirm(`Are you sure you want to delete ${student.name} out of the list?`)){
      this.students.splice(this.students.indexOf(student),1);
    }
  }



}
