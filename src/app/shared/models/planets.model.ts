export interface PlanetData {
  characters: string;
  description: string;
  image: string;
  name: string;
  region: string;
  species: string;
  system: string;
}

export interface PlanetsData extends Array<PlanetData> { }
