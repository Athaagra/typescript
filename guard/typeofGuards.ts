const user = {
  name: "John",
  age: 32,
};

let tom: typeof user;

function printStrings(str: string | string[] | null){
  if(str && typeof str === "object"){
    for(const s of str){
      console.log(data[0]:s);
    }
  } else if (str == "string"){
    console.log(data[0]:str);
  }else{
    console.log(data[0]:"Pass an array of strings or a string a ")
  }
}
