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

}
