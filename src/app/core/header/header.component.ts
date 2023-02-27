import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'My Projects', homePath: '/projects', fragment: '', pagePath: '/projects' },
    { title: 'About Me', homePath: '/about', fragment: '', pagePath: '/about' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
    { title: 'Journal', homePath: '/journal', fragment: '', pagePath: '/journal' }
  ];

  constructor(
    private bioService: BioService, 
    private headerService: HeaderService) { }
}
