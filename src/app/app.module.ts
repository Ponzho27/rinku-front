import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { APP_ROUTING } from './app-routing.module';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { CapturaMensualComponent } from './components/captura-mensual/captura-mensual.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { GeneralComponentsModule } from './modules/general-components/general-components.module';
import { ConfigService } from './services/config.service';
import { EmployeedService } from './services/employeed.service';
import { RolesService } from './services/roles.service';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NuevoEmpleadoComponent,
    CapturaMensualComponent,
    PaymentComponent,
    OnlyNumbersDirective
  ],
  imports: [
    GeneralComponentsModule,
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    EmployeedService,
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
