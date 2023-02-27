import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsUrl = 'assets/json/projects.json';
  constructor(private httpClient: HttpClient) { }

  getProjects(featured?:boolean): Observable<Project[]>{
    let projects$ = this.httpClient.get<Project[]>(this.projectsUrl);
    if (featured){
      return projects$.pipe(
        mergeAll(),
        filter(project => project.featured || false),
        toArray()
      );
    }
    return projects$;
  }

}
