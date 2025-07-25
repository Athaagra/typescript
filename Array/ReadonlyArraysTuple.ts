let number: readonly number[] = [1,2,3];

number.push(2);

type ReadOnlyTuple = readonly [string, string, number];

let person: ReadOnlyTuple = ["John","Doe",21];
person[0] = "Mark";

//array 
type a = Readonly<(string | number)[]>;
type b = ReadonlyArray<string | number>;

//tuple
type c = Readonly<[number, string, number]>;
