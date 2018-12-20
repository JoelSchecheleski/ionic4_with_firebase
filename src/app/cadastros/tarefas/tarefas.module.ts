import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditComponent, DetailComponent, CreateComponent, HomeComponent]
})
export class TarefasModule { }
