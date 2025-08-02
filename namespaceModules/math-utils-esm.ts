import { CommonUtils } from "./common-utils-esm.js";

export class MathUtils {
  export function add(a:number,b:number){
    CommonUtils.log(`Adding ${a} and ${b}`);
    return a+b;
  }
  eport function substract(a:number, b:number){
    return a-b;
  }
}
