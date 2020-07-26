import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PlanetsData } from '../../shared/models/planets.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() dataSource: PlanetsData;
  displayedColumns: string[] = ['img', 'name'];

  constructor(private router: Router) { }

  openPlanet(planetName: string) {
    this.router.navigate([`planets/${planetName}`]);
  }

}
