import { DocumentReference } from '@firebase/firestore-types';
import { DateTime } from 'ionic-angular';

export class Patient {
  public id: string;
  public name: string;
  public age: number;
  public arrivalTime: string;
  public bloodType: string;
  public diet: string;
  public room: string;
  // alive: boolean;
  public doctor?: string;

  constructor() {}

  public setName(newName: string) {
    this.name = newName;
  }
  public setID(newID: string) {
    this.id = newID;
  }
  public setAge(newAge: number) {
    this.age = newAge;
  }
  public setArrivalTime(newArrivalTime: string) {
    this.arrivalTime = newArrivalTime;
  }
  public setBloodType(newBloodType: string) {
    this.bloodType = newBloodType;
  }
  public setDiet(newDiet: string) {
    this.diet = newDiet;
  }
  public setRoom(newRoom: string) {
    this.room = newRoom;
  }
  public setDoctor(newDoctor: string) {
    this.doctor = newDoctor;
  }
}
