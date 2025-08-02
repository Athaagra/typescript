type Status = "success" | "error" | "pending";
type StatusMessage = `status - ${Status}`;

type RGB = `rgb(${number},${number},${number})`;

const color1: RGB = "rgb(255,45,43)";
const color2: RGB = "rgb(255,45,43,56)";
