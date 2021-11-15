import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import { AppState } from 'src/app/shared/state/app.reducer';
import * as fromDetailsAction from 'src/app/pages/details/state/details.actions';
import * as fromDetailsSelectors from '../state/details.selectors';
import { Units } from 'src/app/shared/models/units.enum';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selectors';


@Component({
  selector: 'jv-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  details$: Observable<CityDailyWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  unit$: Observable<Units>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(fromDetailsAction.loadWeatherDetails());
    this.details$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsEntity));
    this.loading$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsLoading));
    this.error$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsError));
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
  }

}
