type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name:string){}

  public addHolidays(holidays: Holidays){
    if(Array.isArray(holidays)){
      for (const holiday of holidays){
        this.holidays.push(holiday);
      }
    }
  }

 /* public printHolidays() {
    if(this.holidays.length ===0){
      return console.log("There are no holidays");
    }
    console.log("Here is the list of holidays");

    this.holidays.forEach((holiday,index) =>{
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
      
    });
  }*/
  //call this method from child classes that are implememented
  public abstract printHolidays():void;
}

class ItDeprtment extends Department {
  protected holidays:Holidays = [];

  constructor(){
    super(name:"IT Department");
  }
  public printHolidays() {
    if(this.holidays.length ===0){
      return console.log("There are no holidays");
    }
    console.log("Here is the list of holidays");

    this.holidays.forEach((holiday,index) =>{
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
      
    });
  }


class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor(){
    super(name:"Admin Department");
  }
}

//initialization of variables
/*const itDepartment: ItDepartment = new ItDepartment(
  name:"IT department "
);

const accountDepartment: ItDepartment = new ItDepartment(
  name:"Accounts department "
);*/

const itHolidays: Holidays = [
  {
    date: new Date(year:2022, month:11, date:1),
    reason: "IT Department Day",
  },
  {
    data: new Date(year:2022, month:12, date:25),
    reason: "Christmas",
  },
];



const adminHolidays: Holidays = [
  {
    date: new Date(year:2022, month:10, date:1),
    reason: "IT Department Day",
  },
  {
    data: new Date(year:2022, month:12, date:25),
    reason: "Christmas",
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

console.log(itDepartment);
console.log(adminDepartment);

// use the printHolidays
itDepartment.printHolidays();
adminDepartment.printHolidays();
