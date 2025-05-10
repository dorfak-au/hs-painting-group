import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { OurServicesTopComponent } from 'src/app/shared/our-services-top/our-services-top.component';

export interface User {
  id: number;
    name: string;
    review: string;
    img?: string;
    occupation?: string;
}




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    ContactComponent,
    OurServicesTopComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faqs = [
    {
      question: 'What types of painting services do you offer?',
      answer:
        'We provide both residential and commercial painting services, including interior and exterior projects.',
      expanded: true,
    },
    {
      question: 'How do you determine pricing?',
      answer:
        'Pricing is based on the scope of the project, materials used, and the specific requirements of each job.',
      expanded: false,
    },
    {
      question: 'What is your scheduling process?',
      answer:
        'We work with you to find a convenient time for your project, ensuring minimal disruption to your daily routine.',
    },
  ];

  users: User[] = [
    {
      id: 1,
      name: 'Drek Rod',
      review:
        'HS PAINTING GROUP transformed my home beautifully! Their attention to detail is unmatched.',
      img: 'assets/images/photo_2025-03-22_10-03-54.jpg',
      occupation: 'Homeowner',
    },
    {
      id: 2,
      name: 'Ibraham Yousef',
      review:
        'We were impressed with the professionalism and quality of work from HS PAINTING GROUP. Thank you',
      img: 'assets/images/user_2.webp',
      occupation: 'Business Owner',
    },
    {
      id: 3,
      name: 'Mike Carrey',
      review:
        'HS PAINTING GROUP exceeded our expectations with their timely and high-quality service.',
      img: 'assets/images/user_3.webp',
      occupation: 'Property Manager',
    },
  ];
}
