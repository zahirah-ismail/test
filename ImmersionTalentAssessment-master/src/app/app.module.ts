
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule } from '@angular/http';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

// components
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { RowViewComponent } from './components/row-view/row-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

// service
import { DataService } from './service/data.service';

// routing

const appRoutes: Routes =  [
  {path: 'grid-view', component: GridViewComponent},
  {path: 'row-view', component: RowViewComponent },
  {path: 'profile-view', component: ProfileViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    RowViewComponent,
    ProfileViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],


})
export class AppModule { }
