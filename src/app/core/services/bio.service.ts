import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bio } from '../models/bio';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  bioUrl = 'assets/json/bio.json'
  constructor(
    private httpClient: HttpClient
  ) { }

  getBio(){
    return this.httpClient.get<Bio>(this.bioUrl)
  }
}
