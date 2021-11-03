import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [ 
    LoaderComponent 
  ],
})
export class ComponentsModule {
}
