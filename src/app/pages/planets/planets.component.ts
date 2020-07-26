import { Component, OnInit } from '@angular/core';
import { PlanetsData } from '../../shared/models/planets.model';
import { PlanetsService } from '../../shared/services/planets.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  headerText = 'Planets';
  planetsData: PlanetsData;
  isLoading = true;
  planets$: Observable<PlanetsData>;
  planetSub$: Subscription;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.planets$ = this.planetsService.getPlanets();
  }

}
