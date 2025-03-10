import { Component, Input, OnInit} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit{
  @Input()
  gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) {
      throw new Error('The gif is required');
    }
  }
}
