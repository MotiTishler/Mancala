import { Component } from '@angular/core';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mancala';

  constructor(public dictionary:DictionaryService){}
}
