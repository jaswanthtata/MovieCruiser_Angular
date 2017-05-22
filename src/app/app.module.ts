import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppService } from './app.service';
import { MovieAppMaterialModule} from './movie-app-material.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie/movie_detail.component';

const route:Routes = [{path: 'moviecomp/:movie', component: MovieDetailComponent}];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [RouterModule.forRoot(route)]
  ],
  exports:[RouterModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
