import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProjectService
{
    constructor(private httpClient: HttpClient){ }
    getListUnivers() : Observable<any>{
        return this.httpClient.get("mbnmdsfbdnmsfbsnmdfsd")
    }

    // getDetailUnivers(): Observable<any>{
    //     return this.httpClient
    // }
}