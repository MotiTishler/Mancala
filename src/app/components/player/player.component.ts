import { Component, Input, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() isPlayer1:boolean;

  constructor(public gameService:GameService,
              public dictionary:DictionaryService) { }

  ngOnInit(): void {

  }

  updatePlayerName(name:string):void{
    if (this.isPlayer1) this.gameService.player1 = name
    else this.gameService.player2 = name;
  }

}
