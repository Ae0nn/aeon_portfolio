import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReadinglistComponent } from './readinglist/readinglist.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ReadinglistComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [HomeComponent]
})
export class PortfolioModule { }
