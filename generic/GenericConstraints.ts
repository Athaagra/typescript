type HasLength = {
  length:number;
};

function logLength<T extends HasLength>(item: T):void {
  console.log(item.length);
}

logLength(numbersArray);
logLength(stringArray);
logLength("stringArray");

logLength({name:"John",length:12});
