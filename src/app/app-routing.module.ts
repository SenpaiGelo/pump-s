import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:"team" , component:TeamComponent },
  { path:"gallery" , component:GalleryComponent },
  { path:"contact", component:ContactComponent },
  { path:"about" , component:AboutComponent },
  { path:"service" , component:ServiceComponent },
  { path:"" , component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
