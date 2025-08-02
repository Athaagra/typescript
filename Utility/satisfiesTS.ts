type Properties = 'red' | 'green' | 'blue';
type RGB = [red:number, green:number, blue:number];

const color: Record<Properties, RGB | string> = {
  red:[255,0,0],
  green: '#00ff00',
  blue:[225,225,0],
};

const color = {
  red:[255,0,0],
  green: '#00ff00',
  blue:[225,225,0],
} satisfies Record<Properties, RGB | string>;

const redComponent = color.red[0];



const color = {
    red:[255,0,0],
    green: "#00ff00",
    blue: [225,225,0],
};

const redComponent = color.red[0]; // 255
const greenValue = color.green.toUpperCase();
