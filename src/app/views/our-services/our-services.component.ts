import { Component } from '@angular/core';
import { OurServicesTopComponent } from 'src/app/shared/our-services-top/our-services-top.component';
import { ProjectsComponent } from 'src/app/shared/projects/projects.component';

@Component({
  selector: 'app-our-services',
  imports: [OurServicesTopComponent, ProjectsComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {}
