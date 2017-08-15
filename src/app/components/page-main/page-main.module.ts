import { MapComponent } from '../map/map.component';
import { NgModule } from '@angular/core';
import { PageMainComponent } from './page-main.component';

@NgModule({
    declarations: [
        PageMainComponent,
        MapComponent
    ],
    providers: [],
    exports: [PageMainComponent]
})
export class PageMainModule {}