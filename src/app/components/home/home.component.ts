import { Component, Input, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() public home:Home;

  constructor(public gameService:GameService) {   }

  ngOnInit(): void {
  }

}
