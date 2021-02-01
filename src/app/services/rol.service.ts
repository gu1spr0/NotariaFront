import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfiguracionService } from "./configuracion.service";
import { Observable } from "rxjs";
<<<<<<< HEAD
import { RoleQuery } from "../models/role/RoleQuery.dto";
=======
import { RoleQueryDto } from "../models/role/RoleQueryDto.dto";
import { Constants } from '../util/Constants';
>>>>>>> 72cdbf466652c74ddb8b8983665da1b0c682986c

@Injectable({
  providedIn: "root",
})
export class RolService {
  public url: string;

  constructor(
    private http: HttpClient,
    private configuracion: ConfiguracionService
  ) {
    this.url = configuracion.ServerWithApiUrl;
  }
<<<<<<< HEAD
  getRolesTodos(): Observable<any> {
    return this.http.get<RoleQuery[]>(this.url + "role");
=======
  getAllRoles(): Observable<any> {
    return this.http.get<RoleQueryDto[]>(this.url + 'role', {
      params: {
        state: Constants.STATE_ACTIVE
      },
      observe: 'response'
    });
>>>>>>> 72cdbf466652c74ddb8b8983665da1b0c682986c
  }
}
