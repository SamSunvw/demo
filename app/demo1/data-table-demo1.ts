import { Component} from '@angular/core';
import {  DataTableResource } from 'angular-2-data-table';
import honorare from './data-table-demo1-data';


@Component({
    selector: 'data-table-demo-1',
    providers: [],
    templateUrl: 'app/demo1/data-table-demo1.html',
    styleUrls: ['app/demo1/data-table-demo1.css']
})
export class DataTableDemo1 {

    itemResource = new DataTableResource(honorare);
    items = [];
    itemCount = 0;
	params = [];

	
    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
         this.itemResource.query(params).then(items => this.items = items);
		 this.params=params;
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }
	
	
	onChange(params) {
		this.itemResource.query(this.params).then(items => this.items = items);
	}
	
	rowColors(item) {
		if(item.status) return 'rgb(200,255,200)';
	}
	
}
