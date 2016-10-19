import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StockService {
    private servicePath = 'http://dev.markitondemand.com/Api/v2/InteractiveChart/json';

    constructor(private http: Http) {

    }

    public getStockInteractiveChart() {
        let params = '{"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"AAPL","Type":"price","Params":["c"]}]}';
        let path = this.servicePath + '?parameters=' + encodeURIComponent(params);
        return this.http.get(path)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }
}
