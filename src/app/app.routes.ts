import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCounterComponent } from './components/product-counter/product-counter.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authentecationGuard } from './guards/authentecation.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { ThemeSettingsComponent } from './components/theme-settings/theme-settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductListComponent,
        title:"Products List"
    },
    {
        path:"add-product",
        component:AddProductComponent,
        title:"Add Product",
        canActivate: [authentecationGuard]
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
        title:"Settings",
        children:[
            {
                path:"profile",
                component:ProfileComponent,
                // canActivateChild: [authentecationGuard]
            },
            {
                path:"theme",
                component:ThemeSettingsComponent
            }
        ]
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Register"
    },
    {
        path:"login",
        component:LoginComponent,
        title:"Login"

    },
    {
        path:"card",
        component:CardComponent,
        title:"Card"

    },
    {
        path:"**",
        component:NotFoundComponent,
        title:"Not Found"
    }
];
