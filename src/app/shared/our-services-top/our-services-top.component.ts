import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-our-services-top',
  imports: [NgClass],
  templateUrl: './our-services-top.component.html',
  styleUrl: './our-services-top.component.scss',
})
export class OurServicesTopComponent {
  bgColor = input<string>('bg-white');
}
