import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './master-page/header/header';
import { Footer } from './master-page/footer/footer';
import { Carousel } from './components/carousel/carousel';
import { Card } from './components/card/card';
import { HorizontalCard } from './components/horizontal-card/horizontal-card';

interface SmallCard {
  title: string;
  description: string;
  imageUrl: string;
}

interface HorizontalCardData {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Carousel,
    Card,
    HorizontalCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('audi-modulo-31');

  smallCards: SmallCard[] = [
    {
      title: 'Group Classes',
      description: 'Dynamic and motivating group workouts.',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a'
    },
    {
      title: 'Facilities',
      description: 'Modern space equipped with state-of-the-art equipment.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JMbOlT9GuKh7TNOWENotkPaadAUjjXjnMg&s'
    },
    {
      title: 'Personal Training',
      description: 'Personalized coaching for faster and safer results.',
      imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e'
    }
  ];


  horizontalCards: HorizontalCardData[] = [
    {
      title: 'CrossFit',
      description: 'CrossFit is a high-intensity functional training program that combines weightlifting, gymnastics, and cardiovascular exercises. It is ideal for those looking to improve endurance, strength, agility, and coordination in a motivating and challenging environment. Sessions are dynamic and varied, preventing monotony and promoting continuous progress. With professional coaching support, workouts are adapted to all fitness levels, from beginners to experienced athletes. Beyond physical benefits, CrossFit encourages teamwork and personal growth, making each session a unique and energizing experience.',
      imageUrl: 'https://thetrainingdesign.co.uk/wp-content/uploads/2023/07/DSC01224-1024x683.jpg'
    },
    {
      title: 'Strength Training',
      description: 'Strength training is essential for building muscle, increasing strength, and improving body composition. In our gym, we offer a fully equipped training area with modern machines, free weights, and functional equipment to ensure a complete and safe workout. Training plans can be personalized according to each member’s goals, whether muscle gain, weight loss, or endurance improvement. With the support of our qualified professionals, we guarantee safe and effective progress. Strength training also contributes to better posture, bone health, and overall well-being.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
    }
  ];


}
