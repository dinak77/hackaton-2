import { Component, OnInit, Input } from '@angular/core';
import { Recolt } from './recolt.model';
import { RecoltService } from './recolt.service';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recolt$: Recolt[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 9);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon = L.icon({
      iconUrl: 'assets/corn_marker.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.http.get<any>('https://api.capgrain.com/corn-observations').subscribe(

      (data: any) => {


        data["hydra:member"].forEach(recolt => {
          L.marker(
            {
              lat: recolt.coordinates.latitude,
              lng: recolt.coordinates.longitude
            },
            { icon: myIcon }).addTo(myfrugalmap);

        }

        )
      })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon2 = L.icon({
      iconUrl: 'assets/rapeseed_marker.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.http.get<any>('https://api.capgrain.com/rapeseed-observations').subscribe(

      (data: any) => {


        data["hydra:member"].forEach(recolt => {
          L.marker(
            {
              lat: recolt.coordinates.latitude,
              lng: recolt.coordinates.longitude
            },
            { icon: myIcon2 }).addTo(myfrugalmap);

        }

        )
      })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon3 = L.icon({
      iconUrl: 'assets/sunflower_marker.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.http.get<any>('https://api.capgrain.com/sunflower-observations').subscribe(

      (data: any) => {


        data["hydra:member"].forEach(recolt => {
          L.marker(
            {
              lat: recolt.coordinates.latitude,
              lng: recolt.coordinates.longitude
            },
            { icon: myIcon3 }).addTo(myfrugalmap);

        }

        )
      })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon4 = L.icon({
      iconUrl: 'assets/wheat_marker.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.http.get<any>('https://api.capgrain.com/wheat-observations').subscribe(

      (data: any) => {


        data["hydra:member"].forEach(recolt => {
          L.marker(
            {
              lat: recolt.coordinates.latitude,
              lng: recolt.coordinates.longitude
            },
            { icon: myIcon4 }).addTo(myfrugalmap);

        }

        )
      })    
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Frugal Map'
      }).addTo(myfrugalmap);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon5 = L.icon({
      iconUrl: 'assets/barley_marker.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.http.get<any>('https://api.capgrain.com/barley_marker-observations').subscribe(

      (data: any) => {


        data["hydra:member"].forEach(recolt => {
          L.marker(
            {
              lat: recolt.coordinates.latitude,
              lng: recolt.coordinates.longitude
            },
            { icon: myIcon5 }).addTo(myfrugalmap);

        }

        )
      });    
     


  }

}

