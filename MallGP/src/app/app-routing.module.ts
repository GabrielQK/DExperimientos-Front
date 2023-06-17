import { ExportComponent } from './components/export/export.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AforoComponent } from './components/aforo/aforo.component';
import { HelpMallComponent } from './components/help-mall/help-mall.component';
import { HomeComponent } from './components/home/home.component';
import { MapsMallComponent } from './components/maps-mall/maps-mall.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { AddSugerenciaComponent } from './components/add-sugerencia/add-sugerencia.component';
import { DetallePromocionComponent } from './components/detalle-promocion/detalle-promocion.component';
import { ProductComponent } from './components/product/product.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { TiendasAdminComponent } from './components/tiendas-admin/tiendas-admin.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddPromocionesComponent } from './components/add-promociones/add-promociones.component';
import { PromocionesAdminComponent } from './components/promociones-admin/promociones-admin.component';
import { AforoAdminComponent } from './components/aforo-admin/aforo-admin.component';
import { MapsMallAdminComponent } from './components/maps-mall-admin/maps-mall-admin.component';
import { NovedadesAdminComponent } from './components/novedades-admin/novedades-admin.component';
import { HelpAdminComponent } from './components/help-admin/help-admin.component';
import { SugerenciasAdminComponent } from './components/sugerencias-admin/sugerencias-admin.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { AddNewComponent } from './components/add-new/add-new.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path:'tiendas', 
    component:TiendasComponent
  },
  {
    path: 'aforo',
    component: AforoComponent,
  },
  {
    path: 'promociones',
    component: PromocionesComponent,
  },
  {
    path: 'maps-mall',
    component: MapsMallComponent,
  },
  {
    path: 'novedades',
    component: NovedadesComponent,
  },
  {
    path: 'sugerencias',
    component: SugerenciasComponent,
  },
  {
    path: 'help-mall',
    component: HelpMallComponent,
  },
  
  {
    path: 'login-admin',
    component: LoginAdminComponent,
  },

  {
    path: 'add/sugerencia',
    component: AddSugerenciaComponent,
  },
  {
    path: 'detalle/producto',
    component: ProductComponent,
  },
  {
    path: 'admin/home',
    component: HomeAdminComponent,
  },
  {
    path: 'admin/store',
    component: TiendasAdminComponent,
  },
  {
    path: 'admin/add/store',
    component: AddStoreComponent,
  },
  {
    path: 'admin/add/producto',
    component: AddProductoComponent,
  },
  {
    path:'admin/edit/store/:id',
    component: AddStoreComponent,
  },
  {
    path:'admin/edit/promocion/:id',
    component: AddPromocionesComponent,
  },
  {
    path:'admin/edit/producto/:id',
    component: AddProductoComponent,
  },
  {
    path: 'detalle/promocion',
    component: DetallePromocionComponent,
  },
  {
    path: 'admin/export',
    component:ExportComponent,
  },
  {
    path: 'admin/promociones',
    component:PromocionesAdminComponent,
  },
  {
    path: 'admin/add/promocion',
    component:AddPromocionesComponent,
  },

  {
    path: 'admin/aforo',
    component:AforoAdminComponent,
  },

  {
    path: 'admin/maps',
    component:MapsMallAdminComponent,
  },

  {
    path: 'admin/novedades',
    component:NovedadesAdminComponent,
  },

  {
    path: 'admin/help',
    component:HelpAdminComponent,
  },

  {
    path: 'admin/sugerencia',
    component:SugerenciasAdminComponent,
  },

  {
    path: 'admin/producto',
    component:ProductAdminComponent,
  },
  {
    path:'admin/add/new',
    component:AddNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
