export interface Dog {
    id?: number;
    name: string;
    level: Level;
    isHouseBroken: boolean;
    underHumaneInvestigation: boolean;
    location: string;
    sex: Sex;
    breed: string;
    description: string;
    age: number;
    kennelNumber: string;
}

export enum Level
{
    Blue = "Blue", 
    BlueGreen = "BlueGreen", 
    Green = "Green", 
    Yellow = "Yellow", 
    Red = "Red"
}

export enum Sex
{
    Unknown = "Unknown", 
    Male = "Male", 
    Female = "Female"
}