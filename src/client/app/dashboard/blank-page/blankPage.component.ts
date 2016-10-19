import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
    moduleId: module.id,
    selector: 'blank-page',
    templateUrl: './blank-page.component.html',
    providers: [StockService]
})

export class BlankPageComponent implements OnInit {

    private result;

    constructor(private stockService: StockService) {
        
    }

    ngOnInit() {
        this.stockService.getStockInteractiveChart()
            .subscribe(response => {
                console.log(response);
                this.result = response;
            });
    }
}
