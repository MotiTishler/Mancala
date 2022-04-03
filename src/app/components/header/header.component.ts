import { Component, OnInit, NgModule } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(public gameService:GameService, 
              public dictionary:DictionaryService) { }

  ngOnInit(): void {
  }

  
}
