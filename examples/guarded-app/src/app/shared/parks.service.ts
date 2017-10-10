import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
import { Park } from './park.model';
import { ParkAttraction } from './park-attraction.model';
import { User } from './user.model';

@Injectable()
export class ParksService {

  private resortIdMap = {
    wdw : 'Walt Disney World',
    universal : 'Universal Orlando',
    legoland: 'LEGOLAND Florida Resort'
  }

  constructor(
    private authService: AuthService
  ) { }

  getResortAttractions(resortId: string): Observable<ParkAttraction[]> {
    let attractions: ParkAttraction[] = [];
    let resortName = this.getResortName(resortId);
    if(this.authService.loggedIn()) {
      let currentUser = this.authService.currentUser();
      let localAttractions = localStorage.getItem(resortId + '-attractions-' + currentUser.id);
      if(localAttractions != null) {
        attractions = JSON.parse(localAttractions);
      }
      if(attractions.length == 0) {
        attractions = this.defaultAttractions.filter(attr => attr.resortName == resortName);
        localStorage.setItem(resortId + '-attractions-' + currentUser.id, JSON.stringify(attractions));
      }
    } else {
      attractions = this.defaultAttractions.filter(attr => attr.resortName == resortName);
    }

    return Observable.of(attractions);
  }

  getResortDetails(resortId: string): Observable<any[]> {
    let parks: any[] = this.parksByResort[resortId] ? this.parksByResort[resortId] : [];
    return Observable.of(parks);
  }

  getResortName(resortId: string): string {
    return this.resortIdMap[resortId];
  }
  

  /* default data */

  private parksByResort = {
    wdw : [
      {
        name: 'Magic Kingdom',
        color: '#8bbedd'
      },
      {
        name: 'Epcot',
        color: '#C0C0C0'
      },
      {
        name: 'Disney\'s Hollywood Studios',
        color: '#B22222'
      },
      {
        name: 'Disney\'s Animal Kingdom',
        color: '#006400'
      }
    ],
    universal : [
      {
        name: 'Universal\'s Islands of Adventure',
        color: '#C11916'
      },
      {
        name: 'Universal Studios Orlando',
        color: '#FF8C00'
      }
    ],
    legoland : [
      {
        name: 'LEGOLAND Florida',
        color: '#FFE330'
      }
    ]
  }

  private defaultAttractions: ParkAttraction[] = [
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Main Street, U.S.A.',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harmony Barber Shop',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Town Square Theater',
      areaName: 'Main Street, U.S.A.',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tony\'s Town Square Restaurant',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Bakery',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Plaza Ice Cream Parlor',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Plaza Restaurant',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey\'s Corner',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Crystal Palace',
      areaName: 'Main Street, U.S.A.',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Chamber of Commerce',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Emporium',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Uptown Jewelers',
      areaName: 'Main Street, U.S.A.',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Main Street Trolley Show',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Dapper Dans',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Citizens of Main Street',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey\'s Corner Pianist',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Festival of Fantasy Parade',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Happily Ever After Fireworks Show',
      areaName: 'Main Street, U.S.A.',
      type: 'show',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Swiss Family Treehouse',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Magic Carpets of Aladdin',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jungle Cruise',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney\'s Enchanted Tiki Room',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pirates of the Caribbean',
      areaName: 'Adventureland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Tree Terrace',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jungle Navigation Co Ltd Skipper Canteen',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Aloha Isle',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tortuga Tavern',
      areaName: 'Adventureland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Pirates League',
      areaName: 'Adventureland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Splash Mountain',
      areaName: 'Frontierland',
      type: 'ride',
      height: 40,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Big Thunder Mountain Railroad',
      areaName: 'Frontierland',
      type: 'ride',
      height: 40,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tom Sawyer Island',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Country Bear Jamboree',
      areaName: 'Frontierland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Golden Oak Outpost',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pecos Bill Tall Tale inn and Cafe',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Westward Ho',
      areaName: 'Frontierland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Frontier Trading Post',
      areaName: 'Frontierland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Hall of Presidents',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Square Riverboad',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Haunted Mansion',
      areaName: 'Liberty Square',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Diamond Horseshoe',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Tree Tavern',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sleepy Hollow',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Square Market',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Columbia Harbour House',
      areaName: 'Liberty Square',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Prince Charming Regal Carrousel',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey\'s PhilharMagic',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Peter Pan\'s Flight',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'it\'s a small world',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Enchanted Tales with Belle',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Under the Sea - Journey of the Little Mermaid',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Ariel in Her Grotto',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pete\'s Silly Sideshow',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney World Railroad',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Casey Jr. Splash \'N\' Soak Station',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Barnstormer',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 35,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dumbo the Flying Elephant',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mad Tea Party',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fairytale Garden',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Many Adventures of Winnie the Pooh',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Seven Dwarfs Mine Train',
      areaName: 'Fantasyland',
      type: 'ride',
      height: 38,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Princess Fairytale Hall',
      areaName: 'Fantasyland',
      type: 'character',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cinderella\'s Royal Table',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pinocchio Village Haus',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Bee Our Guest Restaurant',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Gaston\'s Tavern',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Prince Eric\'s Village Market',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cheschire Cafe',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Storybook Treats',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Friar\'s Nook',
      areaName: 'Fantasyland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Bibbidi Bobbidi Boutique',
      areaName: 'Fantasyland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Big Top Souvenirs',
      areaName: 'Fantasyland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Monsters, Inc. Laugh Floor',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Stitch\'s Great Escape!',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 40,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Speedway',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 32,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Space Mountain',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 44,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Astro Orbiter',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Transit Authority PeopleMover',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney\'s Carousel of Progress',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Buzz Lightyear\'s Space Ranger Spin',
      areaName: 'Tomorrowland',
      type: 'ride',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cosmic Ray\'s Starlight Cafe',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Auntie Gravity\ss Galactic Goodies',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cool Ship',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Lunching Pad',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tomorrowland Terrace Restaurant',
      areaName: 'Tomorrowland',
      type: 'food',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Merchant of Venus',
      areaName: 'Tomorrowland',
      type: 'shop',
      height: 0,
      parkName: 'Magic Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },

    {
      name: 'Spaceship Earth',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Project Tomorrow: Inventing the Wonders of the Future',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mission: SPACE',
      areaName: 'Future World East',
      type: 'ride',
      height: 40,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Advanced Training Lab',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Test Track',
      areaName: 'Future World East',
      type: 'ride',
      height: 40,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Innovention',
      areaName: 'Future World East',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Electirc Umbrella',
      areaName: 'Future World East',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mouse Gear',
      areaName: 'Future World East',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Baymax',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Joy and Sadness',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Epcot Character Spot: Mickey, Minnie and Goofy',
      areaName: 'Future World West',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Seas with Nemo & Friends',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Turtle Talk With Crush',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Soarin',
      areaName: 'Future World West',
      type: 'ride',
      height: 40,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Living with the Land',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Circle of Life',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Journey Into Imagination With Figment',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'ImagineWorks',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney & Pixar Short Film Festival',
      areaName: 'Future World West',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fountain View',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Coral Reef Restaurant',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Seasons',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chip \'n\' Dale\'s Harvest Feast at The Garden Grill',
      areaName: 'Future World West',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Gift Shop',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Art of Disney',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Cool Club',
      areaName: 'Future World West',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Grand Fiesta Tour Starring The Three Caballeros',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Choza de Margarita',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'San Angel Inn Restaurante',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Hacienda de San Angel',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Cantina de San Angel',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'La Cava del Tequila',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Anna and Elsa at Royal Sommerhus',
      areaName: 'World Showcase',
      type: 'character',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Frozen Ever After',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Princess Storybook Dining at Akershus Royal Banquet Hall',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kringla Bakeri Og Kafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Reflections of China',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Nine Dragons Restaurant',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Lotus Blossom Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Joy of Tea',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Biergarten Restaurant',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sommerfest',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Karamell-Küche',
      areaName: 'World Showcase',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tutto Italia Ristorante',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tutto Gusto Wine Cellar',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Via Napoli Ristorante e Pizzeria',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The American Adventure',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Liberty Inn',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fife & Drum Tavern',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Block & Hans',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Teppan Edo',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tokyo Dining',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Katsura Grill',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kabuki Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Restaurante Marrakesh',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tangierine Cafe',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Spice Road Table',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Impressions de France',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Les Vins des Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Crepes des Chefs de France',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Monsieur Paul',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Les Halles Boulangerie-Patisserie',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'L\'Artisan des Glaces',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'World Traveler',
      areaName: 'World Showcase',
      type: 'shop',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rose & Crown Pub',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rose & Crown Dining Room',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yorkshire County Fish Shop',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'O Canada!',
      areaName: 'World Showcase',
      type: 'ride',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Le Cellier Steakhouse',
      areaName: 'World Showcase',
      type: 'food',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'IllumiNations: Reflections of Earth',
      areaName: 'World Showcase',
      type: 'show',
      height: 0,
      parkName: 'Epcot',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },

    {
      name: 'The Great Movie Ride',
      areaName: 'Hollywood Boulevard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Trolley Car Cafe',
      areaName: 'Hollywood Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Hollywood Brown Derby',
      areaName: 'Hollywood Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Oscar\'s Super Service',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey\'s of Hollywood',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Keystone Clothiers',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Adrian & Edith\'s Head to Toe',
      areaName: 'Hollywood Boulevard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'For the First Time in Forever: A "Frozen" Sing-Along Celebration',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Wars: Path of the Jedi',
      areaName: 'Echo Lake',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Celebrity Spotlight',
      areaName: 'Echo Lake',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Indiana Jones Epic Stunt Spectacular!',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Jedi Training: Trials of the Temple',
      areaName: 'Echo Lake',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Tours - The Adventure Continues',
      areaName: 'Echo Lake',
      type: 'ride',
      height: 40,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Hollywood & Vine',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tune-In Lounge',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: '50\'s Prime Time Cafe',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Min and Bill\'s Dockside Diner',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Oasis Canteen',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Backlot Express',
      areaName: 'Echo Lake',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Indiana Jones Adventure Outpost',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: '"Frozen" Fractal Gifts',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tatooine Traders',
      areaName: 'Echo Lake',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Muppet-Vision 3D',
      areaName: 'Muppets Courtyard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'PizzeRizzo',
      areaName: 'Muppets Courtyard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mama Melrose\'s Ristoraunte Italiano',
      areaName: 'Muppets Courtyard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mickey and Minnie Starring in Red Carpet Dreams',
      areaName: 'Commissary Lane',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sci-Fi Dine-In Theater Restaurant',
      areaName: 'Commissary Lane',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'ABC Commissary',
      areaName: 'Commissary Lane',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Toy Story Manie!',
      areaName: 'Pixar Place',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Buzz Lightyear & Woody at Pixar Place',
      areaName: 'Pixar Place',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Hey Howdy Hey Take Away',
      areaName: 'Pixar Place',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Toy Story Dept.',
      areaName: 'Pixar Place',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Walt Disney: One Man\'s Dream',
      areaName: 'Animation Courtyard',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Voyage of the Little Mermaid',
      areaName: 'Animation Courtyard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Wars Launch Bay',
      areaName: 'Animation Courtyard',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney Junior - Live on Stage!',
      areaName: 'Animation Courtyard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Disney Studio Store',
      areaName: 'Animation Courtyard',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Beauty and the Beast - Live on Stage',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Music of Pixar Live! A Symphony of Characters',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rock \'n\' Roller Coaster Starring Aerosmith',
      areaName: 'Sunset Boulevard',
      type: 'ride',
      height: 48,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Twilight Zone Tower of Terror',
      areaName: 'Sunset Boulevard',
      type: 'ride',
      height: 40,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fantasmic!',
      areaName: 'Sunset Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Wars: A Galactic Spectacular',
      areaName: 'Holleywood Boulevard',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Day Cafe',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Anaheim Produce',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rosie\'s All American Cafe',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Catalina Eddie\'s',
      areaName: 'Sunset Boulevard',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Hollywood Studios',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },

    {
      name: 'The Oasis Exhibits',
      areaName: 'Oasis',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rainforest Cafe',
      areaName: 'Oasis',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Garden Gate Gifts',
      areaName: 'Oasis',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Wilderness Explorers',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'It\'s Tough to be a Bug!',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Discovery Island Trails',
      areaName: 'Discovery Island',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Adventurers Outpost',
      areaName: 'Discovery Island',
      type: 'character',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Eight Spoon Cafe',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Smiling Crocodile',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Flame Tree Barbecue',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Isle of Java',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tiffins',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Nomad Lounge',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pizzafari',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Creature Comforts',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Terra Treats',
      areaName: 'Discovery Island',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Island Mercantile',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Riverside Depot',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Discovery Trading Company',
      areaName: 'Discovery Island',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Na\'vi River Journey',
      areaName: 'Pandora - The World of Avatar',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Avatar Flight of Passage',
      areaName: 'Pandora - The World of Avatar',
      type: 'ride',
      height: 44,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Pongu Pongu',
      areaName: 'Pandora - The World of Avatar',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Satu\'li Canteen',
      areaName: 'Pandora - The World of Avatar',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Windtraders',
      areaName: 'Pandora - The World of Avatar',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Festival of the Lion King',
      areaName: 'Africa',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kilimanjaro Safaris',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Gorilla Falls Exploration Trail',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Wildlife Express Train',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Conservation Station',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rafiki\'s Planet Watch - Affection Section',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harambe Fruit Market',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Harambe Market',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Tamu Tamu Refreshments',
      areaName: 'Africa',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dawa Bar',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Donald\'s Dining Safari at Tusker House Restaurant',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kusafiri Coffee Shop & Bakery',
      areaName: 'Africa',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mombasa Marketplace',
      areaName: 'Africa',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Zuri\'s Sweets Shop',
      areaName: 'Africa',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Flights of Wonder',
      areaName: 'Asia',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Maharajah Jungle Trek',
      areaName: 'Asia',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Kali River Rapids',
      areaName: 'Asia',
      type: 'ride',
      height: 38,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Expedition Everest - Legend of the Forbidden Mountain',
      areaName: 'Asia',
      type: 'ride',
      height: 44,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Rivers of Light',
      areaName: 'Asia',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Caravan Road',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Mr. Kamal\'s',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Warung Outpost',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Drinkwallah',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Restaurant',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Local Food Cafes',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Yak & Yeti Quality Beverages',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Anandapur Ice Cream Truck',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Thirsty River Bar & Trek Snacks',
      areaName: 'Asia',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Serka Zong Bazaar',
      areaName: 'Asia',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Boneyard',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Fossil Fun Games',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Finding Nemo - The Musical',
      areaName: 'Dinoland U.S.A',
      type: 'show',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Primeval Whirl',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 48,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'TriceraTop Spin',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'DINOSAUR',
      areaName: 'Dinoland U.S.A',
      type: 'ride',
      height: 40,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Restaurantosaurus',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dino-Bite Snacks',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Trilo-Bites',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Dino Diner',
      areaName: 'Dinoland U.S.A',
      type: 'food',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'Chester & Hester\'s Dinosaur Treasures',
      areaName: 'Dinoland U.S.A',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },
    {
      name: 'The Dino Institute Shop',
      areaName: 'Dinoland U.S.A',
      type: 'shop',
      height: 0,
      parkName: 'Disney\'s Animal Kingdom',
      resortName: 'Walt Disney World',
      favorite: false,
      note: ''
    },


    {
      name: 'Croissant Moon Bakery',
      areaName: 'Port of Entry',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Confisco Grille',
      areaName: 'Port of Entry',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Backwater Bar',
      areaName: 'Port of Entry',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Starbucks',
      areaName: 'Port of Entry',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Cinnabon',
      areaName: 'Port of Entry',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Port of Entry Christmas Shoppe',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Islands of Adventure Trading Company',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Port Provisions',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Ocean Trader Market',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Island Market and Export Candy Shoppe',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'DeFoto\'s Expedition Photography',
      areaName: 'Port of Entry',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Incredible Hulk Coaster',
      areaName: 'Marvel Super Hero Island',
      type: 'ride',
      height: 54,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Storm Force Acceltron',
      areaName: 'Marvel Super Hero Island',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Doctor Doom\'s Fearfall',
      areaName: 'Marvel Super Hero Island',
      type: 'ride',
      height: 52,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Amazing Adventures of Spider Man',
      areaName: 'Marvel Super Hero Island',
      type: 'ride',
      height: 40,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Cafe 4',
      areaName: 'Marvel Super Hero Island',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Captain America Diner',
      areaName: 'Marvel Super Hero Island',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Comic Book Shop',
      areaName: 'Marvel Super Hero Island',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Spider-Man Shop',
      areaName: 'Marvel Super Hero Island',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Marvel Alterniverse Store',
      areaName: 'Marvel Super Hero Island',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Spider-Man Appearing at the Marvel Alterniverse Store',
      areaName: 'Marvel Super Hero Island',
      type: 'character',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Spider-Man and the Marvel Super Heroes',
      areaName: 'Marvel Super Hero Island',
      type: 'character',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Me Ship, The Olive',
      areaName: 'Toon Lagoon',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Popeye & Bluto\'s Bilge-Rat Barges',
      areaName: 'Toon Lagoon',
      type: 'ride',
      height: 42,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Dudley Do-Right\'s Ripsaw Falls',
      areaName: 'Toon Lagoon',
      type: 'ride',
      height: 44,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Comic Strip Cafe',
      areaName: 'Toon Lagoon',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Blondie\'s',
      areaName: 'Toon Lagoon',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Wimpy\'s',
      areaName: 'Toon Lagoon',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Toon Extra',
      areaName: 'Toon Lagoon',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Toon Lagoon Games',
      areaName: 'Toon Lagoon',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Gasoline Alley',
      areaName: 'Toon Lagoon',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Wossamotta-U',
      areaName: 'Toon Lagoon',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Betty Boop Store',
      areaName: 'Toon Lagoon',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Classic Comic Book Characters',
      areaName: 'Toon Lagoon',
      type: 'character',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Skull Island: Reign of Kong',
      areaName: 'Skull Island: Reign of Kong',
      type: 'ride',
      height: 36,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Camp Jurassic',
      areaName: 'Jurassic Park',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Pteranodon Flyers',
      areaName: 'Jurassic Park',
      type: 'ride',
      height: 36,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Jurassic Park River Adventure',
      areaName: 'Jurassic Park',
      type: 'ride',
      height: 42,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Jurassic Park Discovery Center',
      areaName: 'Jurassic Park',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Thunder Falls Terrace',
      areaName: 'Jurassic Park',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Pizza Predatoria',
      areaName: 'Jurassic Park',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Burger Digs',
      areaName: 'Jurassic Park',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Watering Hole',
      areaName: 'Jurassic Park',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Dinostore',
      areaName: 'Jurassic Park',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Jurassic Outfitters',
      areaName: 'Jurassic Park',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Raptor Encounter',
      areaName: 'Jurassic Park',
      type: 'character',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Harry Potter and the Forbidden Journey',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'ride',
      height: 48,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Flight of the Hippogrif',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'ride',
      height: 36,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Frog Choir',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Triwizard Spirit Rally',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Ollivanders',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Ollivanders',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hogwarts Express - Hogsmeade Station',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hog’s Head pub',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Three Broomsticks',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Honeydukes',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Owl Post',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Dervish and Banges',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Filch\'s Emporium of Confiscated Goods',
      areaName: 'The Wizarding World of Harry Potter - Hogsmeade',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Eighth Voyage of Sindbad',
      areaName: 'The Lost Continent',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Mystic Fountain',
      areaName: 'The Lost Continent',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Poseidon’s Fury',
      areaName: 'The Lost Continent',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Doc Sugrue\'s Kebab House',
      areaName: 'The Lost Continent',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Fire-Eater\'s Grill',
      areaName: 'The Lost Continent',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Mythos Restaurant',
      areaName: 'The Lost Continent',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Treasures of Poseidon',
      areaName: 'The Lost Continent',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Star Souls',
      areaName: 'The Lost Continent',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Mythical Metals',
      areaName: 'The Lost Continent',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Historic Families - Heraldry',
      areaName: 'The Lost Continent',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Shop of Wonders',
      areaName: 'The Lost Continent',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The High in the Sky Seuss Trolley Train Ride',
      areaName: 'Seuss Landing',
      type: 'ride',
      height: 40,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Caro-Seuss-el',
      areaName: 'Seuss Landing',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'One Fish, Two Fish, Red Fish, Blue Fish',
      areaName: 'Seuss Landing',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Cat in the Hat',
      areaName: 'Seuss Landing',
      type: 'ride',
      height: 36,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'If I Ran the Zoo',
      areaName: 'Seuss Landing',
      type: 'ride',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Moose Juice, Goose Juice',
      areaName: 'Seuss Landing',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hop On Pop Ice Cream Shop',
      areaName: 'Seuss Landing',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Circus McGurkus Cafe Stoo-pendous',
      areaName: 'Seuss Landing',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Green Eggs & Ham Cafe',
      areaName: 'Seuss Landing',
      type: 'food',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Oh! The Stories You\'ll Hear!',
      areaName: 'Seuss Landing',
      type: 'show',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Snookers & Snookers Sweet Candy Cookers',
      areaName: 'Seuss Landing',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Mulberry Street Store',
      areaName: 'Seuss Landing',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Cats, Hats & Things',
      areaName: 'Seuss Landing',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'All The Books You Can Read',
      areaName: 'Seuss Landing',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Dr. Seuss Character Zone',
      areaName: 'Seuss Landing',
      type: 'shop',
      height: 0,
      parkName: 'Universal\'s Islands of Adventure',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Despicable Me Minion Mayhem',
      areaName: 'Production Central',
      type: 'ride',
      height: 40,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Shrek 4-D',
      areaName: 'Production Central',
      type: 'ride',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hollywood Rip Ride Rockit',
      areaName: 'Production Central',
      type: 'ride',
      height: 51,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'TRANSFORMERS: The Ride-3D',
      areaName: 'Production Central',
      type: 'ride',
      height: 40,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Universal Studios\' Classic Monsters Cafe',
      areaName: 'Production Central',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Super Silly Stuff',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hello Kitty',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Character Party Zone',
      areaName: 'Production Central',
      type: 'character',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet The TRANSFORMERS',
      areaName: 'Production Central',
      type: 'character',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet Shrek and Donkey',
      areaName: 'Production Central',
      type: 'character',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Supply Vault',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Studio Styles',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'On Location',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Film Vault',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Studio Sweets',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Park Plaza Holiday Shop',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Shrek\'s Ye Olde Souvenir Shoppe',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'It\'s A Wrap',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Sahara Traders',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Betty Boop Store',
      areaName: 'Production Central',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Race Through New York Starring Jimmy Fallon',
      areaName: 'New York',
      type: 'ride',
      height: 40,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Revenge of the Mummy',
      areaName: 'New York',
      type: 'ride',
      height: 48,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Blues Brothers Show',
      areaName: 'New York',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Finnegan\'s Bar & Grill',
      areaName: 'New York',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Louie\'s Italian Restaurant',
      areaName: 'New York',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Ben & Jerry’s Ice Cream',
      areaName: 'New York',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Starbucks',
      areaName: 'New York',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Rosie\'s Irish Shop',
      areaName: 'New York',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Tonight Shop',
      areaName: 'New York',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Amazing Pictures',
      areaName: 'New York',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Richter\'s Burger Co.',
      areaName: 'San Francisco',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Chez Alcatraz',
      areaName: 'San Francisco',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Lombard\'s Seafood Grille',
      areaName: 'San Francisco',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'San Francisco Pastry Company',
      areaName: 'San Francisco',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'San Francisco Candy Factory',
      areaName: 'San Francisco',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hogwarts Express - King\'s Cross Station',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'ride',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Knight Bus',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Harry Potter and the Escape from Gringotts',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'ride',
      height: 42,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Ollivanders',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Gringotts Money Exchange',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Tales of Beedle the Bard',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Celestina Warbeck and the Banshees',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Leaky Cauldron',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Florean Fortescue\'s Ice-Cream Parlour',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Fountain of Fair Fortune',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Hopping Pot',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Weasleys\' Wizard Wheezes',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Sugarplum\'s Sweet Shop',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Wands by Gregorovitch',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Quality Quidditch Supplies',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Magical Menagerie',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Madam Malkin\'s Robes for all Occasions',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Scribbulus',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Borgin and Burkes',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Wiseacre\'s Wizarding Equipment',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Shutterbutton\'s',
      areaName: 'The Wizarding World of Harry Potter - Diagon Alley',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'FEAR FACTOR LIVE',
      areaName: 'World Expo',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'MEN IN BLACK Alien Attack',
      areaName: 'World Expo',
      type: 'ride',
      height: 42,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'MIB Gear',
      areaName: 'World Expo',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Simpsons Ride',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'ride',
      height: 40,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Kang & Kodos\' Twirl \'n\' Hurl',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'ride',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Duff Brewery',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Fast Food Boulevard',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Moe\'s Tavern',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Simpsons Games',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Kwik-E-Mart',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Simpsons Character Zone',
      areaName: 'Springfield: Home of the Simpsons',
      type: 'character',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Animal Actors on Location!',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'A Day in the Park with Barney',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Curious George Goes To Town',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'ride',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Woody Woodpecker\'s Nuthouse Coaster',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'ride',
      height: 36,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Fievel\'s Playland',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'ride',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'E.T. Adventure',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'ride',
      height: 34,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'KidZone Pizza Company',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'E.T.\'s Toy Closet & Photo Spot',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'shop',
      height: 34,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'The Barney Shop',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'shop',
      height: 34,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'SpongeBob StorePants',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'shop',
      height: 34,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Meet SpongeBob SquarePants',
      areaName: 'Woody Woodpecker\'s KidZone',
      type: 'character',
      height: 34,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Universal Orlando’s Horror Make-up Show',
      areaName: 'Hollywood',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'TERMINATOR 2: 3-D',
      areaName: 'Hollywood',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Cafe La Bamba',
      areaName: 'Hollywood',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Mel\'s Drive-In',
      areaName: 'Hollywood',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Schwab\'s Pharmacy',
      areaName: 'Hollywood',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Beverly Hills Boulangerie',
      areaName: 'Hollywood',
      type: 'food',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Cyber Image',
      areaName: 'Hollywood',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Williams of Hollywood',
      areaName: 'Hollywood',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Brown Derby Hat Shop',
      areaName: 'Hollywood',
      type: 'shop',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Hollywood Character Zone',
      areaName: 'Hollywood',
      type: 'character',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Universal\'s Superstar Parade',
      areaName: 'Park-Wide Performances',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },
    {
      name: 'Universal\'s Cinematic Spectacular',
      areaName: 'Park-Wide Performances',
      type: 'show',
      height: 0,
      parkName: 'Universal Studios Orlando',
      resortName: 'Universal Orlando',
      favorite: false,
      note: ''
    },


    {
      name: 'Imagination Pavillion',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO Mindstorms',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Building Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Creation Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Flight Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Water Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Wheels Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Education Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Warner Bros Games Zone',
      areaName: 'Imagination Zone',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Technicycle',
      areaName: 'Imagination Zone',
      type: 'food',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'AQUAZONE Wave Racers',
      areaName: 'LEGO Technic',
      type: 'ride',
      height: 40,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Kids Power Tower',
      areaName: 'LEGO Technic',
      type: 'ride',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Tot Spot',
      areaName: 'LEGO Technic',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Project X',
      areaName: 'LEGO Technic',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Cypress Gardens',
      areaName: 'Pirates\' Cove',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Pirates\' Cove Live Water Ski Show',
      areaName: 'Pirates\' Cove',
      type: 'show',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'KIDS BOP Stadium',
      areaName: 'Pirates\' Cove',
      type: 'show',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Las Vegas',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'New York',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO Star Wars',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Washington, D.C.',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'California',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Pirates\' Shores',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Florida',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Kennedy Space Center',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Daytona International Speedway',
      areaName: 'MINILAND USA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Ice Cream Parlor',
      areaName: 'Heartlake City',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Sunshine Sweets',
      areaName: 'Heartlake City',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Heartlake Mall',
      areaName: 'Heartlake City',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Friends to the Rescue Live Show',
      areaName: 'Heartlake City',
      type: 'show',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Mia\'s Riding Adventure',
      areaName: 'Heartlake City',
      type: 'ride',
      height: 48,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Fun Town Pizza & Pasta Buffet',
      areaName: 'Fun Town',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Wells Fargo Fun Town 4D Theater',
      areaName: 'Fun Town',
      type: 'show',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Fun Town Slushies',
      areaName: 'Fun Town',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Minifigure Market',
      areaName: 'Fun Town',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'The Grand Carousel',
      areaName: 'Fun Town',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO Studio Store',
      areaName: 'Fun Town',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Granny\'s Apple Fries',
      areaName: 'Fun Town',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO Factory Experience',
      areaName: 'Fun Town',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Island in the Sky',
      areaName: 'The Beginning',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Coca-Cola Freestyle Station',
      areaName: 'The Beginning',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Create-a-Shake',
      areaName: 'The Beginning',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Market Coffee Shop',
      areaName: 'The Beginning',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Market Restaurant',
      areaName: 'The Beginning',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Pepper and Roni\'s Pizza Stop',
      areaName: 'The Beginning',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'The Big Shop',
      areaName: 'The Beginning',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Flying School Tot Spot',
      areaName: 'LEGO City',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Flying School',
      areaName: 'LEGO City',
      type: 'ride',
      height: 44,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Ford Driving School',
      areaName: 'LEGO City',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Fried Chicken Co.',
      areaName: 'LEGO City',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Firehouse Ice Cream',
      areaName: 'LEGO City',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Ford Jr Driving School',
      areaName: 'LEGO City',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'NFPA Rescue Academy',
      areaName: 'LEGO City',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Boating School',
      areaName: 'LEGO City',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO City Burger Kitchen',
      areaName: 'LEGO City',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO NINJAGO The Ride',
      areaName: 'LEGO NINJAGO World',
      type: 'ride',
      height: 48,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Zane\'s Temple Build',
      areaName: 'LEGO NINJAGO World',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Cole\'s Rock Climb',
      areaName: 'LEGO NINJAGO World',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Jay\'s Lightning Drill',
      areaName: 'LEGO NINJAGO World',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Kai\'s Spinners',
      areaName: 'LEGO NINJAGO World',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Wu\'s Warehouse',
      areaName: 'LEGO NINJAGO World',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Dino Treats',
      areaName: 'Land of Adventure',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Adventure Snacks',
      areaName: 'Land of Adventure',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Coastersaurus',
      areaName: 'Land of Adventure',
      type: 'ride',
      height: 42,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Safari Trek',
      areaName: 'Land of Adventure',
      type: 'ride',
      height: 34,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Beetle Bounce',
      areaName: 'Land of Adventure',
      type: 'ride',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'The Lost Kingdom Adventure',
      areaName: 'Land of Adventure',
      type: 'ride',
      height: 30,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Royal Joust',
      areaName: 'LEGO Kingdoms',
      type: 'ride',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Castle Burger',
      areaName: 'LEGO Kingdoms',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'The Dragon',
      areaName: 'LEGO Kingdoms',
      type: 'ride',
      height: 40,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Kingdom Cones',
      areaName: 'LEGO Kingdoms',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Forestman\'s Hideout',
      areaName: 'LEGO Kingdoms',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'The King\'s Market',
      areaName: 'LEGO Kingdoms',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Merlin\'s Challenge',
      areaName: 'LEGO Kingdoms',
      type: 'ride',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Farm',
      areaName: 'DUPLO Valley',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Tractor',
      areaName: 'DUPLO Valley',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Train',
      areaName: 'DUPLO Valley',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Technic Tot Spot',
      areaName: 'DUPLO Valley',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Splash & Play',
      areaName: 'DUPLO Valley',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Cragger\'s Swamp',
      areaName: 'World of CHIMA',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Razar\'s Bazaar',
      areaName: 'World of CHIMA',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Quest for CHI',
      areaName: 'World of CHIMA',
      type: 'ride',
      height: 48,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Ice Cream Hut',
      areaName: 'Water Park',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Twin Chasers',
      areaName: 'Water Park',
      type: 'ride',
      height: 42,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Splash Out',
      areaName: 'Water Park',
      type: 'ride',
      height: 48,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Joker Soaker',
      areaName: 'Water Park',
      type: 'ride',
      height: 36,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'LEGO Wave Pool',
      areaName: 'Water Park',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Waveside Burrito',
      areaName: 'Water Park',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Creative Cove',
      areaName: 'Water Park',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'DUPLO Splash Safari',
      areaName: 'Water Park',
      type: 'ride',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'River Raft ICEE',
      areaName: 'Water Park',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Build-a-Raft River',
      areaName: 'Water Park',
      type: 'ride',
      height: 42,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Beach-n-Brick Bar',
      areaName: 'Water Park',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Beach-n-Brick Grill',
      areaName: 'Water Park',
      type: 'food',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    },
    {
      name: 'Surf Shop',
      areaName: 'Water Park',
      type: 'shop',
      height: 0,
      parkName: 'LEGOLAND Florida',
      resortName: 'LEGOLAND Florida Resort',
      favorite: false,
      note: ''
    }
  ];

}
