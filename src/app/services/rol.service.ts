import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfiguracionService } from "./configuracion.service";
import { Observable } from "rxjs";
import { RoleQueryDto } from "../models/role/RoleQueryDto.dto";
import { Constants } from '../util/Constants';

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
  getAllRoles(): Observable<any> {
    return this.http.get<RoleQueryDto[]>(this.url + 'role', {
      params: {
        state: Constants.STATE_ACTIVE
      },
      observe: 'response'
    });
  }
}
