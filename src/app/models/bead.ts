export class Bead{
    red:number;
    green:number;
    blue:number;

    constructor(){
        this.red = Math.floor(Math.random()*255);
        this.green = Math.floor(Math.random()*255);
        this.blue = Math.floor(Math.random()*255);
    }

    getRGB():string{
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

}