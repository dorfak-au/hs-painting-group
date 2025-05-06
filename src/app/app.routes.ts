import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { OurServicesComponent } from './views/our-services/our-services.component';
import { ProjectDetailComponent } from './shared/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
];
