import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PlanetsData, PlanetData } from '../models/planets.model';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetsData> {
    return this.http.get<PlanetsData>(`${this.apiUrl}/planets`);
  }

  getPlanet(name: string): Observable<PlanetData> {
    return this.http.get<PlanetData>(`${this.apiUrl}/planets/${name}`);
  }
}
