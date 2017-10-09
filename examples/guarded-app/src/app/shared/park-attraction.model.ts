export interface ParkAttraction {
    areaName?: string;
    favorite: boolean;
    height: number;
    name: string;
    note: string;
    parkName: string;
    resortName: string;
    type: 'ride' | 'food' | 'character' | 'show' | 'shop';
}
