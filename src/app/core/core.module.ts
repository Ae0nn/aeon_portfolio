import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export default class CoreModule {}
