import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from '../forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VoyageServiceService {
  voyagesUrl ='https://forfaits-voyages-2022.herokuapp.com/api/1896148/forfaits/'

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl);  
  }

  addForfaits(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.voyagesUrl + 'forfait', forfait, httpOptions);
}

  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.voyagesUrl + 'forfait/' + id, forfait, httpOptions);
  }

  Forfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.voyagesUrl + 'forfait/' + id);
}


}
