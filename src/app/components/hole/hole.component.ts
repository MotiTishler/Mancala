import { Component, Input, OnInit } from '@angular/core';
import { Hole } from 'src/app/models/hole';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.css']
})
export class HoleComponent implements OnInit {

  @Input() public hole:Hole;
  
  constructor(public gameService:GameService) { 
   
  }

  ngOnInit(): void {
  }

  startAMove():void{
    if (this.hole.getCount())
    {
      this.gameService.makeAMove(this.hole.index);    
    }
  }
  
  getPosition(index:number, length:number):string{
    switch(length){
      case 2:
        switch(index){
          case 0:
            return 'b2pos1';
          case 1:
            return 'b2pos2';
        }
        break;
      case 3:
        switch(index){
          case 0:
            return 'b3pos1';
          case 1:
            return 'b3pos2';
          case 2:
            return 'b3pos3';
        }
        break;
      case 4:
        switch(index){
          case 0:
            return 'b4pos1';
          case 1:
            return 'b4pos2';
          case 2:
            return 'b4pos3';
          case 3:
            return 'b4pos4';
        }
        break;
      case 5:
        switch(index){
          case 0:
            return 'b5pos1';
          case 1:
            return 'b5pos2';
          case 2:
            return 'b5pos3';
          case 3:
            return 'b5pos4';
          case 4:
            return 'b5pos5';
        }
        break;
      case 6:
        switch(index){
          case 0:
            return 'b6pos1';
          case 1:
            return 'b6pos2';
          case 2:
            return 'b6pos3';
          case 3:
            return 'b6pos4';
          case 4:
            return 'b6pos5';
          case 5:
            return 'b6pos6';
        }
        break;
      default:
        switch(index){
          case 0:
            return 'c1';
          case 1:
            return 'c2pos2';
          case 2:
            return 'c2pos3';
          case 3:
            return 'c2pos4';
          case 4:
            return 'c2pos5';
          case 5:
            return 'c2pos6';
          case 6:
            return 'c2pos7';
          case 7:
            return 'c3pos8';
          case 8:
            return 'c3pos9';
          case 9:
            return 'c3pos10';
          case 10:
            return 'c3pos11';
          case 11:
            return 'c3pos12';
          case 12:
            return 'c3pos13';
          case 13:
            return 'c3pos14';
          case 14:
            return 'c3pos15';
          case 15:
            return 'c3pos16';
          case 16:
            return 'c3pos17';
          case 17:
            return 'c3pos18';
          case 18:
            return 'c3pos19';
          case 19:
            return 'c4pos20';
          case 20:
            return 'c4pos21';
          case 21:
            return 'c4pos22';
          case 22:
            return 'c4pos23';
          case 23:
            return 'c4pos24';
          case 24:
            return 'c4pos25';
          case 25:
            return 'c4pos26';
          case 26:
            return 'c4pos27';
          case 27:
            return 'c4pos28';
          case 28:
            return 'c4pos29';
          case 29:
            return 'c4pos30';
          case 30:
            return 'c4pos31';
          case 31:
            return 'c4pos32';
          case 32:
            return 'c4pos33';
          case 33:
            return 'c4pos34';
          case 34:
            return 'c4pos35';
          case 35:
            return 'c4pos36';
          case 36:
            return 'c4pos37';
          case 37:
            return 'c6pos38';
          case 38:
            return 'c6pos39';
          case 39:
            return 'c6pos40';
          case 40:
            return 'c6pos41';
          default:
            return '';
        }
        break;
      }
      return '';
  }

}
