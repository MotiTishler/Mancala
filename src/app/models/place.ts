import { Bead } from "./bead";

export abstract class Place{
    beads:Bead[] = [];

    constructor(){}

    add(b:Bead):number{
        return this.beads.push(b);
    }

    clear():void{
        this.beads = [];
    }

    getCount():number{
        return this.beads.length;
    }

    abstract init():void;
    abstract getNext(isPlayer1:boolean):number;

}