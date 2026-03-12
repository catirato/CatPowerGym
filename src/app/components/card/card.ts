import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    RouterLink
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() title: string ="";
  @Input() description: string ="";
  @Input() imageUrl: string ="";

}
