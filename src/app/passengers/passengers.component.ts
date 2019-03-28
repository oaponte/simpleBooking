import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { AddPassengers, RemovePassengers } from '../passengers.actions';

export interface PassengersList {
  position: number;
  firstName: string;
  lastName: string;
  birthDay: string;
}

// cargar listas 
let ELEMENT_DATA: PassengersList[] = [];

// remove passenger
const where = (property, value) => x => x[property] !== value;

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})

export class PassengersComponent implements OnInit {
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('birthDay') birthDay: ElementRef;

  ngOnInit() {
    this.update$.subscribe(() => { this.refresh()});
  }
  
  dataSource = ELEMENT_DATA;
  
  countP$: Observable<number>;
  private update = new Subject<void>();
  update$ = this.update.asObservable();

  constructor(private store: Store<{ countP: number }>) {
    this.countP$ = store.pipe(select('countP'));
  }

  addPassengers() {
    this.store.dispatch(new AddPassengers());
    const positionPassengers = ELEMENT_DATA.length + 1;
    const addData = {position: positionPassengers,
                     firstName: this.firstName.nativeElement.value, 
                     lastName: this.lastName.nativeElement.value, 
                     birthDay: this.birthDay.nativeElement.value};
    ELEMENT_DATA.push(addData);
    this.refresh();
  }

  removePassengers(pos) {
    this.store.dispatch(new RemovePassengers());
    ELEMENT_DATA = ELEMENT_DATA.filter(where('position', pos));
    this.refresh();
  }

  refresh() {
    this.dataSource = ELEMENT_DATA;
  }
}
