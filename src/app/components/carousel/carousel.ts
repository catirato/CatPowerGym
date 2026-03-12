import { Component } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

interface Room {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MdbCarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {

  rooms: Room[] = [
    {
      title: 'Cardio Room',
      description: 'A fully equipped cardio area featuring treadmills, rowing machines, stationary bikes, and ellipticals. Designed to improve endurance, burn calories, and support heart health in a modern and energetic environment.',
      imageUrl: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?crop=entropy&cs=tinysrgb&fit=crop&w=1600&h=900'
    },
    {
      title: 'Strength Training Room',
      description: 'A complete strength training space with free weights, resistance machines, and functional equipment. Ideal for building muscle, increasing power, and improving overall body composition safely and effectively.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=crop&w=1600&h=900'
    },
    {
      title: 'Functional Training Zone',
      description: 'An open and dynamic training area designed for high-intensity and functional workouts. Equipped with kettlebells, battle ropes, plyo boxes, and suspension systems to enhance agility, coordination, and total-body strength.',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=crop&w=1600&h=900'
    }
  ];

}
