type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square",
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  breadth: number;
};

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return side ** 2;
    case "rectangle":
      return breadth * lenght;
    default:
      const _exhaustiveCheck: never = shape;
      throw new Error("Unhandled shape type");
  }
}
