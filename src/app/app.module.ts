import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { flightReducer } from './flight.reducer';
import { FlightComponent } from './flight/flight.component';
import { passengersReducer } from './passengers.reducer';
import { PassengersComponent } from './passengers/passengers.component';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule  } from '@angular/material';
import { MatListModule  } from '@angular/material';
import { MatTableModule  } from '@angular/material';
import { MatInputModule  } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';

const appRoutes: Routes = [
  { path: 'flight', component: FlightComponent },
  { path: 'passengers', component: PassengersComponent },
  { path: 'paymentdetails', component: PaymentdetailsComponent },
  { path: '',
    redirectTo: '/flight',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, FlightComponent, HomeComponent, NavbarComponent, PassengersComponent, PaymentdetailsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: flightReducer, countP: passengersReducer }),
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
