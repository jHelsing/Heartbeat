import { DateTime } from "ionic-angular";

//import { Person } from '../models/person'; 
export interface Doctor{
    //person: Person
    phone: string;
    //speciality
    //office
    email: string;
    workoursStart: DateTime;
    workoursEnd: DateTime;
}