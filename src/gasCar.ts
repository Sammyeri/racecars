import { Racer } from "./racer";

export class GasCar implements Racer{
    team: string;
    speed: number = 0;
    fuel: number; 

    constructor(team: string, fuel:number =10){
        this.team = team;
        this.fuel = fuel;
    }

    accelerate(): void {
        this.speed += 2;
        this.fuel --;
    }

    isFuelEmpty(): boolean {
        if(this.fuel <= 0){
            return true;
        }else {
            return false;
        }
    }
}