import { SolarCar } from "../src/solarCar";
import {GasCar} from "../src/gasCar";
import {findRacersWithemptyfuel} from "../src/racer-functions";
import { Racer } from "../src/racer";
import {findAverageSpeed} from "../src/racer-functions";
import {getFasterRacer} from "../src/racer-functions";

describe("solarCar class tests", () => {
    test("given team1 should be team1", () => {
        //setup
        const team = "team1";
        const solarCar = new SolarCar(team);

        //execute
        const result = solarCar.team;

        //evaluate
        expect(result).toBe("team1");
    });

    test("speed should equal 0", () => {
        //setup
        const solarCar = new SolarCar("team1");

        //execute
        const result = solarCar.speed;

        //evaluate
        expect(result).toBe(0);
    });

    test("calling accelerate once should set speed to 1", () => {
        //setup
        const solarCar = new SolarCar("team1");

        //execute
        solarCar.accelerate();
        const result = solarCar.speed;

        //evaluate
        expect(result).toBe(1);
    });

    test("calling accelerate should set speed to 2", () => {
        //setup
        const solarCar = new SolarCar("team1");

        //execute
        solarCar.accelerate();
        solarCar.accelerate();
        const result = solarCar.speed;

        //evaluate
        expect(result).toBe(2);
    });

    test("isFuelEmpty should be false", () => {
        //setup
        const solarCar = new SolarCar("team1");

        //execute
        const result = solarCar.isFuelEmpty();

        //evaluate
        expect(result).toBe(false);
    });
});

describe("gasCar tests", () => {
    test("team and fuel set from constructor", () => {
        //setup
        const team = "team1";
        const fuel = 100;
        const gasCar = new GasCar(team, fuel);

        //execute
        const result1 = gasCar.team;
        const result2 = gasCar.fuel;

        //evaluate
        expect(result1).toBe("team1");
        expect(result2).toBe(100);
    });

    test("fuel defaults to 10 with no given", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        const result = gasCar.fuel;

        //evaluate
        expect(result).toBe(10);
    });
    
    test("speed starts at 0", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        const result = gasCar.speed;

        //evaluate
        expect(result).toBe(0);
    });

    test("calling accelerate once set speed to 2", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        const result = gasCar.speed;

        //evaluate
        expect(result).toBe(2);
    });

    test("calling accelerate twice set speed to 4", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        gasCar.accelerate();
        const result = gasCar.speed;

        //evaluate
        expect(result).toBe(4);
    });

    test("calling accelerate once reduces fuel by 1", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        const result = gasCar.fuel;

        //evaluate
        expect(result).toBe(9);
    });

    test("calling accelerate twice reduces fuel be 2", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        gasCar.accelerate();
        const result = gasCar.fuel;

        //evaluate
        expect(result).toBe(8);
    });

    test("calling accelerate 10 times should return true from isfuelempty", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        gasCar.accelerate();
        const result = gasCar.isFuelEmpty();

        //evaluate
        expect(result).toBe(true);
    });

    test("isfuelempty returns false when fuel is greater than 0", () => {
        //setup
        const team = "team1";
        const gasCar = new GasCar(team);

        //execute
        gasCar.accelerate();
        const result = gasCar.isFuelEmpty();

        //evaluate
        expect(result).toBe(false);
    });
});

describe("findRacerWithEmptyFuel functions test", () => {
    test("given an array of gascars with where some have no fuel", () => {
        //setup
        const car1 = new GasCar("John", 0);
        const car2 = new GasCar("Bob");
        const car3 = new GasCar("Anne", 0);
        const car4 = new GasCar("Jane");
        const cars: Racer[] = [car1, car2, car3, car4];

        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect([result[0].team, result[1].team]).toEqual(["John", "Anne"]);
    });

    test("given an array of gascars with where all have no fuel", () => {
        //setup
        const car1 = new GasCar("John", 0);
        const car2 = new GasCar("Bob", 0);
        const car3 = new GasCar("Anne", 0);
        const car4 = new GasCar("Jane", 0);
        const cars: Racer[] = [car1, car2, car3, car4];

        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect([result[0].team, result[1].team, result[2].team, result[3].team]).toEqual(["John", "Bob", "Anne", "Jane"]);
    });
    
    test("given an array of gascars with where all have  fuel", () => {
        //setup
        const car1 = new GasCar("John");
        const car2 = new GasCar("Bob");
        const car3 = new GasCar("Anne");
        const car4 = new GasCar("Jane");
        const cars: Racer[] = [car1, car2, car3, car4];
    
        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect(result).toEqual([]);
    });
    
    test("given an array of solar cars ", () => {
        //setup
        const car1 = new SolarCar("John");
        const car2 = new SolarCar("Bob");
        const car3 = new SolarCar("Anne");
        const car4 = new SolarCar("Jane");
        const cars: Racer[] = [car1, car2, car3, car4];
    
        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect(result).toEqual([]);
    });
    
    test("given an array of solar and gas cars ", () => {
        //setup
        const car1 = new SolarCar("John");
        const car2 = new GasCar("Bob");
        const car3 = new GasCar("Anne", 0);
        const car4 = new SolarCar("Jane");
        const cars: Racer[] = [car1, car2, car3, car4];
    
        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect(result[0].team).toEqual("Anne");
    });
   
    test("given an empty array ", () => {
        //setup
        const cars: Racer[] = [];
    
        //execute
       const result = findRacersWithemptyfuel(cars);
       
       
       //evaluate
       expect(result).toEqual([]);
    });
});

describe("findAverageSpeed function tests", () => {
    test("array of gas cars with different speeds", () => {
        //setup
        const car1 = new GasCar("John");
        const car2 = new GasCar("Bob");
        const car3 = new GasCar("Anne");
        const car4 = new GasCar("Jane");
        car1.speed = 10;
        car2.speed = 3;
        car3.speed = 21;
        car4.speed = 4;
        const cars = [car1, car2, car3, car4];
        
        //execute
        const result = findAverageSpeed(cars);

        //evaluate
        expect(result).toBe(9.5);
    });
    
    test("array of gas and solar cars with different speeds", () => {
        //setup
        const car1 = new GasCar("John");
        const car2 = new SolarCar("Bob");
        const car3 = new GasCar("Anne");
        const car4 = new SolarCar("Jane");
        car1.speed = 10;
        car2.speed = 3;
        car3.speed = 21;
        car4.speed = 4;
        const cars = [car1, car2, car3, car4];
        
        //execute
        const result = findAverageSpeed(cars);

        //evaluate
        expect(result).toBe(9.5);
    });
   
    test("array of gas and solar cars with 0 speed", () => {
        //setup
        const car1 = new GasCar("John");
        const car2 = new SolarCar("Bob");
        const car3 = new GasCar("Anne");
        const car4 = new SolarCar("Jane");
        const cars = [car1, car2, car3, car4];
        
        //execute
        const result = findAverageSpeed(cars);

        //evaluate
        expect(result).toBe(0);
    });
    
    test("empty array", () => {
        //setup
        const cars: Racer[] = [];
        
        //execute
        const result = findAverageSpeed(cars);

        //evaluate
        expect(result).toBe(0);
    });
});

describe("getFasterRacer function tests", () => {
    test("racerA is faster", () => {
        //setup
        const racerA = new GasCar("John");
        const racerB = new GasCar("Jane");
        racerA.speed = 10;
        racerB.speed = 9;

        //execute
        const result = getFasterRacer(racerA, racerB);

        //evaluate
        expect(result).toBe(racerA);
    });
   
    test("racerB is faster", () => {
        //setup
        const racerA = new SolarCar("John");
        const racerB = new SolarCar("Jane");
        racerA.speed = 10;
        racerB.speed = 11;

        //execute
        const result = getFasterRacer(racerA, racerB);

        //evaluate
        expect(result).toBe(racerB);
    });
    
    test("same speed", () => {
        //setup
        const racerA = new GasCar("John");
        const racerB = new SolarCar("Jane");
        racerA.speed = 10;
        racerB.speed = 10;

        //execute
        const result = getFasterRacer(racerA, racerB);

        //evaluate
        expect(result).toBe(null);
    });
});