import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Position } from './position';


@Injectable()
export class PositionService {

  private url = "https://fathomless-sands-38649.herokuapp.com/";
  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(this.url + '/positions');
  }

  getPosition(id) : Observable<Position[]>{
    return this.http.get<Position[]>(this.url + '/position/' + id)
  }

  savePosition(position: Position): Observable<any>{
    return this.http.put<any>(this.url + '/position/', position._id);
  }
}
