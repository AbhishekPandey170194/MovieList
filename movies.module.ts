import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SearchPipe} from "../pipe/search.pipe"
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {SortPipe} from "../pipe/sort.pipe"
const routes: Routes = [
  {
    path: '',
    component:MoviesListComponent
  }
];

@NgModule({
  declarations: [MoviesListComponent,SearchPipe,SortPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports:[SearchPipe,SortPipe]
})
export class MoviesModule { }
