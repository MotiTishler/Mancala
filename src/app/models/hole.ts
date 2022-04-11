import { Bead } from "./bead";
import { Place } from "./place";

export class Hole extends Place{
   
    constructor(public index:number){
        super();  
    }

    init(): void {
        this.clear();
        this.add(new Bead());
        this.add(new Bead());
        this.add(new Bead());
        this.add(new Bead());
    }

    getNext(isPlayer1:boolean): number {
        if ((isPlayer1 && this.index == 11) ||
            (!isPlayer1 && this.index == 5)) 
            return 12;
        return this.index==11? 0: this.index+1; 
    }

    getParams(isPlayer1:boolean){
        return {beads:[...this.beads], where:this.getNext(isPlayer1)};
    }
    
}