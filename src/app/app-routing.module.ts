import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HardwareComponent} from "./hardware/hardware.component";
import {HardwareDetailComponent} from "./hardware/hardware-detail/hardware-detail.component";

const routes: Routes = [
  { path: 'hardware', component: HardwareComponent },
  { path: 'detail/:code', component: HardwareDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
