import { RouterModule, Routes } from '@angular/router';
import { CapturaMensualComponent } from './components/captura-mensual/captura-mensual.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TemplateComponent } from './modules/general-components/template/template.component';


const APP_ROUTES: Routes = [
    {
        path: 'Home', component: TemplateComponent, children: [
            { path: 'Dashboard', component: DashboardComponent},
            { path: 'Nuevo', component: NuevoEmpleadoComponent},
            { path: 'Captura', component: CapturaMensualComponent},
            { path: 'Pago', component: PaymentComponent}
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '/Home/Dashboard'},    
]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true, onSameUrlNavigation: 'reload' });
