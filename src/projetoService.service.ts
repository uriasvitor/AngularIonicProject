import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { projetoModel } from "./projeto.model";


export const api = 'https://api.npoint.io/b919b5770e6ed23e5617/pedidos'
@Injectable({
    providedIn:'root'
})

export class projetoService{
    constructor(private http: HttpClient){}

    getAll():Observable<projetoModel[]>{
        return this.http.get<projetoModel[]>(api);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${api}/${id}`, data);
    }
    create(data: any): Observable<any> {
        return this.http.post(api, data);
      }
    get(id: any): Observable<projetoModel> {
        return this.http.get<any>(`${api}/${id}`);
      }
    delete(id: any): Observable<any> {
        return this.http.delete(`${api}/${id}`);
    }
    
    deleteAll(): Observable<any> {
        return this.http.delete(api);
    }

}