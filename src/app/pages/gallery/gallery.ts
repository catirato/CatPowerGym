import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  images: string[] = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop'
  ];


}
