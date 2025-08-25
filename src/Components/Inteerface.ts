export interface User {
    id: number;
    image:string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    age:number;
}


  export interface Users{
    firstName:string;
    lastName:string;
    age:number;
    email:string;
    phone:string;
    birthDate:string
  }



export interface UserInfoProps{
  title: string;
  showImg?: boolean;
  src?: string;
  placeholderOne?: string;
  placeholderTwo?: string;
  placeholderThree?: string;
  placeholderFour?: string | number;
  placeholderFive?: string;
  placeholderSix?: string;
  button?: string;
  showButton?: boolean;
  readOnly?: boolean;
  valueOne?: string;
  valueTwo?: string;
  valueThree?: string;
  valueFour?: string | number;
  valueFive?: string;
  valueSix?: string;
  message?: string;
}