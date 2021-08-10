import { CreateComponent } from './productos/create/create.component';
import { DetailsComponent } from './productos/details/details.component';
import { ListComponent } from './productos/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'list-productos', pathMatch: 'full'},
  {path: 'list-productos', component:ListComponent},
  {path: 'details-productos', component:DetailsComponent},
  {path: 'create-productos', component:CreateComponent},
  {path: '**', redirectTo: 'list-productos', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListComponent,DetailsComponent,CreateComponent];
