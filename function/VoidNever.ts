// process that does not return a value
function writeToDatabase(value:string): void {
    console.log("Writing to a database", value);
}
// a process that runs infinite
function throwError(error: string): never {
  throw new Error(error);
}

type check = never extends void ? true : false;
type check2 = void extends never ? true : false;
