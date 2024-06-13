import { Level } from './dog';
import { DogActivityType, Timeslot } from './dogActivity';

export interface BoardItem {
    dogId: number;
    name: string;
    level: Level;
    location: string;
    kennelNumber: string;
    isHouseBroken: boolean;
    underHumaneInvestigation: boolean;
    morning: DogActivityItem;
    afternoon: DogActivityItem;
    evening: DogActivityItem;
}

export interface DogActivityItem {
    firstName: string;
    lastName: string;
    date: Date;
    type: DogActivityType;
    timeslot: Timeslot;
}