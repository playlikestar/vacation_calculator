export class Student{
    name:string;
    familyName:string;
    monthHours:{december:number,
january:number,
february:number,
march:number,
april:number,
may:number,
june:number,
july:number,
august:number,
september:number,
october:number,
november:number,
}
    totalHours:number;
vacationDays:number;

    constructor(name:string,familyName:string, monthHours:{december:number,
        january:number,
        february:number,
        march:number,
        april:number,
        may:number,
        june:number,
        july:number,
        august:number,
        september:number,
        october:number,
        november:number,
        }){
this.name=name;
this.familyName=familyName;
this.monthHours=monthHours;
this.totalHours=0;
for(let key of Object.values(this.monthHours)){
    this.totalHours+=key;
}
this.vacationDays=0;
    }
}