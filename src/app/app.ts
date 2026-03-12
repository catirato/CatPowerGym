import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './master-page/header/header';
import { Footer } from './master-page/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
