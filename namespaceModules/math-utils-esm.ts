import AddOutput from "./AddOutput-interface.js"
import { CommonUtils } from "./common-utils-esm.js";

export class MathUtils {
  export function add(a:number,b:number):AddOutput{
    CommonUtils.log(`Adding ${a} and ${b}`);
    return {sum:a+b,class:"MathUtils",};
  }
  eport function substract(a:number, b:number){
    return a-b;
  }
}
