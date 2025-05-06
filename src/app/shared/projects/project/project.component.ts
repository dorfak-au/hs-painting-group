import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  imports: [MatChipsModule, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  project = input<Project | null>(null);
}
