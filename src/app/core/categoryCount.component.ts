import {Component, KeyValueDiffer,KeyValueDiffers,ChangeDetectorRef} from '@angular/core';
import {Model} from '../model/repository.model';

@Component({
	selector:'paProductCount',
	template:`<div class="bg-info p-3">Liczba kategorii: {{count}}</div>`
})
export class CategoryCountComponent{
	private differ:KeyValueDiffer<any, any>;
	count :number = 0;

	constructor(private model:Model, 
		private keyValueDiffers:KeyValueDiffers,
		private changeDetector:ChangeDetectorRef){

	}

	ngOnInit(){
		this.differ = this.keyValueDiffers
			.find(this.model.getProducts())
			.create();

	}

	ngDoCheck(){
		if (this.differ.diff(this.model.getProducts()) !=null) {
			this.count = this.model.getProducts()
				.map(p=>p.category)
				.filter((category,index,array) => array.indexOf(category)==index)
				.length ;			
		}
	}
	

	
}
