// Partial<Type>;

interface User{
    name: string;
    email: string;
    password: string;
}
//partial is identical of putting questionmark in front of a variable

function updateUser(user:User,updates:Partial<User>): User{
   return {...user, ...updates}; 
}

const user: User = {
    name: "John",
    email: "test@email.com",
    password: "password",
};

const updatedUser = updateUser(user, {email:"email@test.com"});
