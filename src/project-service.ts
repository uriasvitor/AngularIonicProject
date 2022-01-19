import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { projeto } from "./projeto.model";


const api = 'http://localhost:3000/pedidos'
@Injectable({
    providedIn:'root'
})

export class projectService{
    constructor(private http: HttpClient){}

    getAll():Observable<projeto[]>{
        return this.http.get<projeto[]>(api);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${api}/${id}`, data);
      }
    
    
}