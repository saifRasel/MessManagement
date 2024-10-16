import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MessMember } from 'src/app/model/MessMember';
@Injectable({
  providedIn: 'root'
})
export class MessServicesService {




  URL:string="http://localhost:8080/" 
  constructor(private httpClient: HttpClient) { }
  

  saveMember(data:MessMember){
    return this.httpClient.post<String>(this.URL+"saveMessMember",data,{})
  }

}
