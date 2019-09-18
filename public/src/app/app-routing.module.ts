import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowallprodsComponent } from './showallprods/showallprods.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'showallprods', component:ShowallprodsComponent, 
    children:
    [
      {path:'create', component:CreateComponent},
      {path:'edit', component:EditComponent},
    ]},
  { path:'edit', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
