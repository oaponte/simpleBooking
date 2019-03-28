import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { AddFlight, RemoveFlight } from '../flight.actions';

export interface FlightList {
  origen: string;
  position: number;
  destino: string;
  departureDate: string;
  price: number;
}

// cargar listas 
let ELEMENT_DATA: FlightList[] = [];

// remove flight
const where = (property, value) => x => x[property] !== value;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  @ViewChild('origen') origen: ElementRef;
  @ViewChild('destino') destino: ElementRef;
  @ViewChild('departureDate') departureDate: ElementRef;
  @ViewChild('price') price: ElementRef;

  ciudades = [
    {value: '1', nombre: 'Bogota'},
    {value: '2', nombre: 'Cali'},
    {value: '3', nombre: 'Ibague'}
  ];

  ngOnInit() {
    this.update$.subscribe(() => { this.refresh()});
  }
  dataSource = ELEMENT_DATA;
  
  count$: Observable<number>;
  private update = new Subject<void>();
  update$ = this.update.asObservable();

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  addFlight() {
    this.store.dispatch(new AddFlight());
    const positionFlight = ELEMENT_DATA.length + 1;
    const addData = {position: positionFlight,
                     origen: this.ciudades[this.origen.nativeElement.value - 1].nombre,
                     destino: this.ciudades[this.destino.nativeElement.value - 1].nombre,
                     departureDate: this.departureDate.nativeElement.value, 
                     price: this.price.nativeElement.value};
    ELEMENT_DATA.push(addData);
    this.refresh();
  }

  removeFlight(pos) {
    this.store.dispatch(new RemoveFlight());
    ELEMENT_DATA = ELEMENT_DATA.filter(where('position', pos));
    this.refresh();
  }

  refresh() {
    this.dataSource = ELEMENT_DATA;
  }
}
