import { Racer } from "./racer";

export function findRacersWithemptyfuel(array: Racer[]){
    let racers: Racer[] = [];
    array.filter((element) => {
        if (element.isFuelEmpty() === true){
            racers.push(element);
        }
    });
    return racers;
}

export function findAverageSpeed(array:Racer[]): number{
    let total = 0;
    let average = 0;
    if(array.length > 0){
        array.forEach((element) => {
            total += element.speed
        })
        if(total > 0){
            average = total / array.length;
        }
    }
    return average;
}

export function getFasterRacer(racerA:Racer, racerB:Racer): Racer | null{
    if(racerA.speed > racerB.speed){
        return racerA;
    } else if (racerB.speed > racerA.speed){
        return racerB
    } else {
        return null;
    }
}