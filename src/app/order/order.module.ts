import { NgModule } from "@angular/core";
import { OrderComponent } from './order.component';
import { OderItemsComponent } from './oder-items/oder-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router'


const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [ DeliveryCostsComponent, OderItemsComponent, OrderComponent],
    //nós usamos alguns componentes importados no sherdModule, por isso iremos eimportá=lo aqui
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{}