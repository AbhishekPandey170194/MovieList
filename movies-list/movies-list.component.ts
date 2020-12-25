import { Component, OnInit } from '@angular/core';
import { uptime } from 'process';
import moviesdata from './data.json';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public searchText : string;
  movies=moviesdata
  p: number = 1;
  contentPerPage=100

  constructor() { }

  ngOnInit(): void {
  }
}
