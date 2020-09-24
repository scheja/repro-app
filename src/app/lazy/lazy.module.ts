import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import {CComponent} from './c/c.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {LazyRoutingModule} from './lazy-routing.module';


@NgModule({
  declarations: [
    AComponent,
    BComponent,
    CComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule {
}
