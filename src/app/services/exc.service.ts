import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Excursion } from '../class/excursion';
const URL =  "http://localhost:3000/excursions";
@Injectable({
  providedIn: 'root'
})
export class ExcService {

  constructor(private http:HttpClient) { }
getExcursion():Observable<Excursion[]>
{
return this.http.get<Excursion[]>(URL);
}
addExcursion(e:Excursion):Observable<Excursion>{
  return this.http.post<Excursion>(URL,e);
}
updateExcursion(id:number, excursion:Excursion):Observable<Excursion>{
  return this.http.put<Excursion>(URL+"/"+id,excursion );
}
deleteLivre(id:number){
  return this.http.delete(URL+ "/"+id);
}

}
