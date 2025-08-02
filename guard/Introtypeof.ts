// it guards the typeof the input
function converNumberToString(number) {
  if (typeof number !== "number") {
    console.log("Input a valid number");
  }
  return number.toString();
}
