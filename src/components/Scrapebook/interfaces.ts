import { EventData } from "tns-core-modules/data/observable/observable";

export interface IeventData extends EventData {
  value: string | Date | number;
}
export interface ISelction {
  title: string;
  gender: string;
  age: number;
}
