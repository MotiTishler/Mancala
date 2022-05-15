import { Component, Input, OnInit } from '@angular/core';
import { Bead } from 'src/app/models/bead';

@Component({
  selector: 'app-bead',
  templateUrl: './bead.component.html',
  styleUrls: ['./bead.component.css']
})
export class BeadComponent implements OnInit {

  @Input() bead:Bead;
  @Input() myPosition:string;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
