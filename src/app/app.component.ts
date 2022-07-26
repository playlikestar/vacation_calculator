import { Component, ElementRef, ViewChild,AfterContentChecked } from '@angular/core';
import { Student } from './students-list/student/student.model';
import { StudentsListComponent } from './students-list/students-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'vacation-calculator-app';
  modalActive = false;
  modalType: string;
  constructor() { }
  students: Student[] = [new Student('Egor', 'Shevchenko', {
    december: 30,
    january: 40,
    february: 30,
    march: 40,
    april: 30,
    may: 40,
    june: 30,
    july: 40,
    august: 30,
    september: 40,
    october: 30,
    november: 30,
  }), new Student('Michael', 'Zub', {
    december: 20,
    january: 40,
    february: 30,
    march: 40,
    april: 30,
    may: 40,
    june: 30,
    july: 40,
    august: 30,
    september: 40,
    october: 30,
    november: 30,
  })];


  currentstudentIndex: number;
  currentStudent: Student;
  currentselectMonth = 'december';




  modalControl(type: string) {
    this.modalType = type;
 
    this.modalActive = true;
    
  }
  studentslistChange(modal: Student) {
    if (this.modalType == 'add' && modal.name != '' && modal.familyName != '') {
      this.students.push(modal);
      this.modalActive = false;
    } else if (modal.name != '' && modal.familyName != '') {
      this.students[this.currentstudentIndex] = modal;
      this.modalActive = false;
    } else {
      alert('Fill in fields or press close');
    }
  }

  setModalInputs(event: { student: Student, index: number }) {
    this.currentstudentIndex = event.index;
    this.currentStudent = event.student;
  }

ngAfterContentChecked(): void {
  for(let i=0;i<this.students.length;i++){
    this.students[i].totalHours=Object.values(this.students[i].monthHours).reduce((a, b) => +a + +b, 0);
    this.students[i].vacationDays=Math.floor((this.students[i].totalHours*5/12)/24);
  }
}

}


