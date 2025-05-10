import { Component } from '@angular/core';
import { ProjectsComponent } from 'src/app/shared/projects/projects.component';

@Component({
  selector: 'app-gallery',
  imports: [ProjectsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
