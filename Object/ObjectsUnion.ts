type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion ={
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
  wags: true,
  purrs: true,
};

let partialDog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
}
