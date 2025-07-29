class User {
  constructor(name,email){
    this.name = name;
    this.email = email;
    this.point = 0;
  }
  login(){
    console.log(this.name, 'Has logged in');
  }
  logoout(){
    console.log(this.name, 'Has logged out');
  }
  addPoint(){
    this.points++;
    console.log('total points',this.points);
    
  }
}


function User(name,email){
  this.name = name;
  this.email = email;
  this.point = 0;

  this.login = () => {
    console.log(this.name, 'Has logged in');
  };
  this.logout = () => {
    console.log(this.name, 'Has logged out');
  };

  this.addPoint = () => {
    this.points++;
    console.log('total points', this.points);
  };
  
}

function User(name,email){
  this.name = name;
  this.email = email;
  this.point = 0;
}

User.prototype.login = function(){
  console.log(this.name, 'Has logged in');
};
User.prototype.logout = function(){
  console.log(this.name, 'Has logged out');
};
User.prototype.addPoint = function(){
  this.points++;
  console.log('total points',this.points);
};
const user = new User('John','john@email.com');
user.addPoint();
user.prototype.addPoint();

//inheritance 
function AdminUser(name,email,peopleReporting){
    User.apply(this, [name,email]);
    this.peopleReporting = peopleReporting;
}
AdminUser.prototype = Object.create(User.prototype);
AdminUser.protoype.updatePeopleReporting = function(
  newNumber
){
  this.peopleReporting = newNumber;
};

const admin = new AdminUser('Mark','mark@email.com',1);
console.log(admin);



console.log(user);
