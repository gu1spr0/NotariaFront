import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConfiguracionService {
  public ServerWithApiUrl = environment.apiUrl;
  constructor() {}
}
