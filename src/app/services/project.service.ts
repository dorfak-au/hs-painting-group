import { Injectable, signal } from '@angular/core';
import { Project, projects as projectData } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = signal<Project[]>(projectData);

  getProjects() {
    if (this.projects().length === 0) {
      this.projects.set(projectData);
    }
    return this.projects();
  }
}
