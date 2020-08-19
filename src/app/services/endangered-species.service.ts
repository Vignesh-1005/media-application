import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndangeredSpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciesDetails() {
    return this.http.get<any>('../../assets/data/animals.json');
  }
}
