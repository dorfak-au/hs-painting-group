import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  project = signal<Project | null>(null);

  labelMap: Record<string, string> = {
    client: 'Client',
    date: 'Date',
    role: 'Role',
    type: 'Project Type',
  };

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project.set(this.projectService.getProjectById(parseInt(projectId)));
      console.log(this.project());
    } else {
      this.project.set(null);
    }
  }

  get detailEntries() {
    if (this.project() && this.project()?.details) 
    {
      return Object.entries(this.project()!.details);
    }
    return [];
  }
}
