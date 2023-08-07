export interface Dog {
    id: number;
    name: string;
    level: Level;
    isHouseBroken: boolean;
    underHumaneInvestigation: boolean;
    location: string;
    sex: Sex;
    breed: string;
    description: string;
    age: number;
}

enum Level
{
    Blue, BlueGreen, Green, Yellow, Red
}

enum Sex
{
    Unknown, Male, Female
}