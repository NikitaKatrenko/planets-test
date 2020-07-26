import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PlanetData } from 'src/app/shared/models/planets.model';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  isLoading = true;
  planetName: string;
  planetData: PlanetData;
  planetSub$: Subscription;


  constructor(private route: ActivatedRoute,
              private planetService: PlanetsService) { }

  ngOnInit(): void {
    let planet$: Observable<PlanetData>;
    this.planetName = this.route.snapshot.paramMap.get('name');
    planet$ = this.planetService.getPlanet(this.planetName);
    this.planetSub$ = planet$.subscribe((data) => {
      this.planetData = data;
      this.isLoading = false;
    });
  }

}
