import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public http = inject(HttpClient);
  constructor() { }

  obtenerUsuarios(): Observable<User[]> {
    const url = `${environment.baseUrl}lista-usuarios`;
    return this.http.get<User[]>(url);
  }
}
