import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCounterComponent } from './components/product-counter/product-counter.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductListComponent,
        title:"Products List"
    },
    {
        path:"add-product",
        component:AddProductComponent,
        title:"Add Product"
    },
    {
        path:"product-details/:id",
        component:ProductDetailsComponent,
        title:"Product Details"
    },
    {
        path:"product-counter",
        component:ProductCounterComponent,
        title:"Product Count"
    },
    {
        path:"settings",
        component:SettingsComponent,
        title:"Settings"
    },
    {
        path:"**",
        component:NotFoundComponent,
        title:"Not Found"
    }
];
