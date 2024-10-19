import { CreateNoZeroNumber } from "./random";

export function roll (rollString:string):number {
    switch (true) {
        case rollString.includes("+") : 
            return rollString.split("+").reduce((value,next) => value + roll(next),0);
        case rollString.includes("d") : 
            const diceRoles = rollString.split("d");
            return Array.from(Array(parseInt(diceRoles[0])).keys()).reduce((value,_) => value + CreateNoZeroNumber(parseInt(diceRoles[1])),0);
        default : return parseInt(rollString);
    }
}