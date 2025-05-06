import { Component, effect, OnInit, signal } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = signal<Project[]>([]);

  constructor(private projectService: ProjectService) {
    effect(() => {
      this.projects.set(this.projectService.getProjects());
      console.log(this.projects());
    });
  }
}
