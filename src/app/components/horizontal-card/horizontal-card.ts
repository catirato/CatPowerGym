import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  templateUrl: './horizontal-card.html',
  styleUrl: './horizontal-card.scss',
})
export class HorizontalCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() footer: string = '';

  // controla o lado da imagem
  @Input() align: 'left' | 'right' = 'left';
}
