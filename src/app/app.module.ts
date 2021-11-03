import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SheetplateComponent } from './components/sheetplate/sheetplate.component';
import { TubeComponent } from './components/tube/tube.component';
import { RodComponent } from './components/rod/rod.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetplateComponent,
    TubeComponent,
    RodComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'sheetplate-calculator', component: SheetplateComponent},
      {path: 'tube-calculator', component: TubeComponent},
      {path: 'rod-calculator', component: RodComponent},
      {path: '', redirectTo: '/sheetplate-calculator', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
