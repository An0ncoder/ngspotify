import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes  } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent 
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      }
    ]) 
    ],
  providers: [SpotifyService],  
  declarations: [ 
    AppComponent, 
    NavbarTopComponent, 
    SearchComponent, 
    AboutComponent, 
    ArtistComponent  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
