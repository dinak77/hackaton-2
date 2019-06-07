import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recolt } from './recolt.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecoltService {

  constructor(private http: HttpClient){}

    getRecolt(){
      return this.http.get<Recolt[]>("https://api.capgrain.com/corn-observations").pipe(
        map(
          (data:any) => {
            return data["hydra:member"] as Recolt[];
          }
        )
      );
    }
    }
