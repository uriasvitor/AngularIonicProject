import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { projetoModel } from "./projeto.model";


const api = 'http://localhost:3000/pedidos'
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
    
    delete(id: any): Observable<any> {
        return this.http.delete(`${api}/${id}`);
    }
    
    deleteAll(): Observable<any> {
        return this.http.delete(api);
    }
}