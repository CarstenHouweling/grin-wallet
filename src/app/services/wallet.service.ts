import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class WalletService {
  private url: string = 'http://' + localStorage.getItem('walletLocation') + '/wallet';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}
