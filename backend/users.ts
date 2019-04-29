export class User {
  constructor(public email: string,
              public name : string,
              private password: string){}

 matches(another : User): boolean {
   return another!== undefined &&
   another.email === this.email &&
   another.password === this.password
 }
}
<<<<<<< HEAD
export const users = {
=======
export const users: {[key:string]: User} = {
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb
    "rafius@gmail.com" : new User('rafius@gmail.com','Rafael Monteiro','rafa')
}
