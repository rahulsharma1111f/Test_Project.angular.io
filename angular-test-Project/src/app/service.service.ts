import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private head = { 'content-type': 'application/json' }

  private header1 = {
    headers: new HttpHeaders()
      .set('authorization', `OUlBV0Z5Y1R2TDNnRjRTVmdMMStTQT09OjqZq1UZPSgSoDXMefyz5L/3`)
  }

  private header2 = {
    headers: new HttpHeaders()
      .set('authorization', `OUlBV0Z5Y1R2TDNnRjRTVmdMMStTQT09OjqZq1UZPSgSoDXMefyz5L/3`)
  }

  

  constructor(
    private httpClient: HttpClient
  ) { }

  public getData = async (param): Promise<Object> => {
    return await this.httpClient.post('https://benepik.org/kpmg/APIs/News/Get_post', param, this.header1).toPromise();
  }

  public getDataSecond = (param): Observable<Object> => {
    return this.httpClient.post('https://benepik.org/kpmg/APIs/News/Post_detail', param, this.header2);
  }
}
