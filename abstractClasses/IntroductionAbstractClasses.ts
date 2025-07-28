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
}

class ItDeprtment extends Department {
  protected holidays:Holidays = [];

  constructor(){
    super(name:"IT Department");
  }
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
console.log(adminDepertment);
