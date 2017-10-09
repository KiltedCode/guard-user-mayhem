import { ParkAttraction } from './park-attraction.model';

export interface Park {
    attractions: ParkAttraction[];
    location: string;
    name: string;
    resortName: string;
}
