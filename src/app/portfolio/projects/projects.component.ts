import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap(atHome => this.projectsService.getProjects(atHome))
  );

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  constructor(private projectsService: ProjectsService, private headerService: HeaderService) { }
}
