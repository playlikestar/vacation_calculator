import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Student } from '../students-list/student/student.model';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit, AfterContentChecked, AfterContentInit {
  @Output() closedModal = new EventEmitter<boolean>;
  @Output() savedModal = new EventEmitter<Student>;

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('familynameInput') familynameInput: ElementRef;

  @ViewChild('hoursInput') hoursInput: ElementRef;


  @ViewChild('selectOpt') selectOpt: ElementRef;

  @Input() hoursinModal = '';
  @Input() nameinModal = '';
  @Input() familynameinModal = '';
@Input() totalhoursinModal=0;
  @Input() modalheaderName = 'Add Student Vacation';
  @Input() type: string;

  @Input() student: Student;

  selectValue = 'December';

  constructor() { }

  closeModal() {
    this.closedModal.emit(false);
  }

  saveModal() {
    this.savedModal.emit(this.student);
  }

  setMonthInput() {
    this.selectValue = this.selectOpt.nativeElement.value;
  }

  inputpressName() {
    this.student.name = this.nameInput.nativeElement.value;
  }

  inputpressFamilyname() {
    this.student.familyName = this.familynameInput.nativeElement.value;
  }

  inputPressHours() {
    switch (this.selectValue) {
      case 'December':
        this.student.monthHours.december = this.hoursInput.nativeElement.value;
        break;
      case 'January':
        this.student.monthHours.january = this.hoursInput.nativeElement.value;
        break;
      case 'February':
        this.student.monthHours.february = this.hoursInput.nativeElement.value;
        break;
      case 'March':
        this.student.monthHours.march = this.hoursInput.nativeElement.value;
        break;
      case 'April':
        this.student.monthHours.april = this.hoursInput.nativeElement.value;
        break;
      case 'May':
        this.student.monthHours.may = this.hoursInput.nativeElement.value;
        break;
      case 'June':
        this.student.monthHours.june = this.hoursInput.nativeElement.value;
        break;
      case 'July':
        this.student.monthHours.july = this.hoursInput.nativeElement.value;
        break;
      case 'August':
        this.student.monthHours.august = this.hoursInput.nativeElement.value;
        break;
      case 'September':
        this.student.monthHours.september = this.hoursInput.nativeElement.value;
        break;
      case 'October':
        this.student.monthHours.october = this.hoursInput.nativeElement.value;
        break;
      case 'November':
        this.student.monthHours.november = this.hoursInput.nativeElement.value;
        break;
    }
  }

  ngOnInit(): void {
  }


  ngAfterContentChecked(): void {
    if (this.type == 'edit') {
      this.nameinModal = this.student.name;
      this.familynameinModal = this.student.familyName;
      this.modalheaderName = 'Edit Student Vacation';
    }
      switch (this.selectValue) {
        case 'December':
          this.hoursinModal = this.student.monthHours.december.toString();
          break;
        case 'January':
          this.hoursinModal = this.student.monthHours.january.toString();
          break;
        case 'February':
          this.hoursinModal = this.student.monthHours.february.toString();
          break;
        case 'March':
          this.hoursinModal = this.student.monthHours.march.toString();
          break;
        case 'April':
          this.hoursinModal = this.student.monthHours.april.toString();
          break;
        case 'May':
          this.hoursinModal = this.student.monthHours.may.toString();
          break;
        case 'June':
          this.hoursinModal = this.student.monthHours.june.toString();
          break;
        case 'July':
          this.hoursinModal = this.student.monthHours.july.toString();
          break;
        case 'August':
          this.hoursinModal = this.student.monthHours.august.toString();
          break;
        case 'September':
          this.hoursinModal = this.student.monthHours.september.toString();
          break;
        case 'October':
          this.hoursinModal = this.student.monthHours.october.toString();
          break;
        case 'November':
          this.hoursinModal = this.student.monthHours.november.toString();
          break;
      }
    
      this.student.totalHours=Object.values(this.student.monthHours).reduce((a, b) => +a + +b, 0);
this.student.vacationDays=Math.floor((this.student.totalHours*5/12)/24);
  }
ngAfterContentInit(): void {
  if(this.type=='add'){
    this.student = new Student('', '', {
      december: 0,
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
    });
  }

}

}
