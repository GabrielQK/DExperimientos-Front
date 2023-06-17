import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AforoComponent } from './components/aforo/aforo.component';
import { HelpMallComponent } from './components/help-mall/help-mall.component';
import { MapsMallComponent } from './components/maps-mall/maps-mall.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSugerenciaComponent } from './components/add-sugerencia/add-sugerencia.component';
import { DetallePromocionComponent } from './components/detalle-promocion/detalle-promocion.component';
import { ProductComponent } from './components/product/product.component';
import { ExportComponent } from './components/export/export.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddPromocionesComponent } from './components/add-promociones/add-promociones.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AforoAdminComponent } from './components/aforo-admin/aforo-admin.component';
import { HelpAdminComponent } from './components/help-admin/help-admin.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { MapsMallAdminComponent } from './components/maps-mall-admin/maps-mall-admin.component';
import { NovedadesAdminComponent } from './components/novedades-admin/novedades-admin.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { PromocionesAdminComponent } from './components/promociones-admin/promociones-admin.component';
import { SugerenciasAdminComponent } from './components/sugerencias-admin/sugerencias-admin.component';
import { TiendasAdminComponent } from './components/tiendas-admin/tiendas-admin.component';
import { AddNewComponent } from './components/add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAdminComponent,
    HomeComponent,
    NavbarComponent,
    AforoComponent,
    HelpMallComponent,
    MapsMallComponent,
    NovedadesComponent,
    PromocionesComponent,
    SugerenciasComponent,
    TiendasComponent,
    AddSugerenciaComponent,
    DetallePromocionComponent,
    ProductComponent,
    ExportComponent,
    NavbarAdminComponent,
    AddProductoComponent,
    AddPromocionesComponent,
    AddStoreComponent,
    AforoAdminComponent,
    HelpAdminComponent,
    HomeAdminComponent,
    MapsMallAdminComponent,
    NovedadesAdminComponent,
    ProductAdminComponent,
    PromocionesAdminComponent,
    SugerenciasAdminComponent,
    TiendasAdminComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
