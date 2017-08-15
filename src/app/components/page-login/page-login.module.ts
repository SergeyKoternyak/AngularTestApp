import { GroupFormModule } from '../group-form/group-form.module';
import { NgModule } from '@angular/core';
import { PageLoginComponent } from './page-login.component';

@NgModule({
    declarations: [
        PageLoginComponent
    ],
    imports: [
        GroupFormModule
    ],
    providers: [],
    exports: [PageLoginComponent]
})
export class PageLoginModule {}