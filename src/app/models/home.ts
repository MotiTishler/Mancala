import { Place } from "./place";

export class Home extends Place{
    
    constructor(public isPlayer1:boolean){
        super();
    }

    init(): void {
        this.clear();
    }
    getNext(isPlayer1: boolean): number {
        if (isPlayer1) return 0;
        return 6;        
    }

    
    
}