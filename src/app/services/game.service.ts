import { Injectable } from '@angular/core';
import { Hole } from '../models/hole';
import { Home } from '../models/home';
import { Place } from '../models/place';
import { DictionaryService } from './dictionary.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public player1:string = "";
  public player2:string = "";

  public holes:Hole[] = [];
  public home1:Home;
  public home2:Home;

  public nowPlayer1:boolean = true;
  public message:string = ""; 
  public vsComputer:boolean = false;

  constructor(public dictionary:DictionaryService) {
    for (let i = 0; i<12; i++){
      this.holes.push(new Hole(i));
    }
    this.home1 = new Home(true);
    this.home2 = new Home(false);
  }

  initGame():void{
    this.nowPlayer1 = true;
    this.holes.forEach(hole => hole.init());
    this.home1.init();
    this.home2.init();

    this.message = `${this.player1} ${this.dictionary.getYourTurn()}`;
  }

  getWinner():string{
    let cnt1 = this.home1.getCount();
    let cnt2 = this.home2.getCount();
    if (cnt1 == cnt2) return this.dictionary.getDraw();
    return ((cnt1 > cnt2)? this.player1 : this.player2);
  }

  togglePlayer():void{
    this.nowPlayer1 = !this.nowPlayer1;
    this.message = `${this.nowPlayer1? this.player1 : this.player2} ${this.dictionary.getYourTurn()}`;
  }

  makeAMove(index:number):void{
    if (index < 0 || index > 11) return;

    let params = this.holes[index].getParams(this.nowPlayer1);
    if (!params.beads) return;

    this.holes[index].clear();
    let res = this.divideBeads(params);
    
    if (res.index<12 && res.count>1){
      this.makeAMove(res.index);
    }else if (res.index==12){
      //Check if game ends
      if (this.home1.getCount() + this.home2.getCount() == 48) this.message = this.getWinner();
    }else if (res.count == 1){
      //End of move. Toggle player.
      this.togglePlayer();
    }

  }

  divideBeads({beads, where}){
   
    if (where < 0 || where > 12 || !beads) return {index:-1, count:0};

    let h:Place = (where<12? this.holes[where] : this.nowPlayer1? this.home1 : this.home2);
    let bead = beads.pop();

    h.add(bead);

    if (beads.length > 0){
      //there are another moves.
      return this.divideBeads({beads:beads, where:h.getNext(this.nowPlayer1)});
    }else{
      //this was the last move
      return {index:where, count:h.getCount()};
    }
  }
}
