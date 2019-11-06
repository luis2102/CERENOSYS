import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface Receta {
  id: string;
  ingrediente: string;
  //flag: string;
  caducidad: number;
  population: number;

}

const recetas: Receta[] = [
  {
    id: 'PREBPA00',
    ingrediente: 'Premium Beef Patty',
    //flag: 'f/f3/Flag_of_Russia.svg',
    caducidad: 200919,
    population: 146989754
  },
  {
    id: 'PREBST00',
    ingrediente: 'Premium Beef Stew',
    //flag: 'c/cf/Flag_of_Canada.svg',
    caducidad: 9976140,
    population: 36624199
  },
  {
    id: 'PRIWBR00',
    ingrediente: 'Prime Whole Brisket',
    //flag: 'a/a4/Flag_of_the_United_States.svg',
    caducidad: 9629091,
    population: 324459463
  },
  {
    id: 'PRIBRST00',
    ingrediente: 'Prime Boneless Ribeye Steaks',
    //flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    caducidad: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Receta[] {
  return recetas.filter(Receta => {
    const term = text.toLowerCase();
    return Receta.ingrediente.toLowerCase().includes(term)
        || pipe.transform(Receta.caducidad).includes(term)
        || pipe.transform(Receta.population).includes(term);
  });
}


@Component({
  selector: 'app-searchread',
  templateUrl: './searchread.component.html',
  styleUrls: ['./searchread.component.css'],
  providers: [DecimalPipe]
})
export class SearchreadComponent implements OnInit {

  currentJustify = 'start';

  recetas$: Observable<Receta[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) 
  {
    this.recetas$ = this.filter.valueChanges.pipe
    (
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit() {
  }

}
