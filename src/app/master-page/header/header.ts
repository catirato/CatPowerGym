import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MdbCollapseModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
