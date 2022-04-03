import { Injectable } from '@angular/core';
import { dictionary } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  public selectedLanguage:string = "Eng";
  constructor() { }

  getLanguages():string[]{
    return Object.keys(dictionary);
  }
  
  getName(lang:string = this.selectedLanguage):string{
    return dictionary[lang].name;
  }
  getRTL(lang:string = this.selectedLanguage):boolean{
    return dictionary[lang].rtl;
  }

  getFlag(lang:string = this.selectedLanguage):string{
    let flags:string[] = dictionary[lang].flags;

    if (flags.length == 1) return flags[0];

    return flags[Math.floor(Math.random() * flags.length)];
  }

  getDisplayString(key:string, lang:string = this.selectedLanguage):string{
    return dictionary[lang].displayStrings[key];
  }

  getMyMancala(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("MyMancala", lang);
  }
  getPlayer1(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("Player1", lang);
  }
  getPlayer2(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("Player2", lang);
  }
  getStartButton(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("Start", lang);
  }
  getInitialMessage(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("initialMsg", lang);
  }
  getDraw(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("Draw", lang);
  }
  getWinner(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("Winner", lang);
  }
  getVsComputer(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("vsComputer", lang);
  }
  getYourTurn(lang:string = this.selectedLanguage):string{
    return this.getDisplayString("yourTurn", lang);
  }

  
}
