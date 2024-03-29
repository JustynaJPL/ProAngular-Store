// model.module.ts
import {NgModule} from "@angular/core";
// import {StaticDataSource} from "./static.datasource";
import {Model} from "./repository.model";
import { HttpClientModule} from '@angular/common/http';
import {RestDataSource, REST_URL} from './rest.datasource';
import {ModelResolver} from "./model.resolver";

@NgModule({
	providers:[Model, RestDataSource, ModelResolver, 
	{provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }],
	imports:[HttpClientModule]
})
export class ModelModule {	
	constructor() {
		
	}
}