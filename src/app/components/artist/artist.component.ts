import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';


@Component({
  moduleId: module.id,  
  selector: 'artist',
  templateUrl: 'artist.component.html'
})

export class ArtistComponent  { 
    id: string; 
    artist: Artist[];
    albums: Album[];

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private _spotifyService: SpotifyService,
      private _router: Router
    ){}

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this._spotifyService.getArtist(params['id']))
        .subscribe(artist => this.artist = artist)  
      
      this.route.params
        .switchMap((params: Params) => this._spotifyService.getAlbums(params['id']))
        .subscribe(albums => this.albums = albums)  
    }

 }
