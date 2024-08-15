import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ForestGetListRequest, ForestListItem } from '@so-rung/api-interfaces';
import {  selectForestList } from '../+state/forest.selectors';
import { loadForestList } from '../+state/forest.actions';

@Component({
  selector: 'lib-forest-list',
  templateUrl: './forest-list.component.html',
  styleUrl: './forest-list.component.css',
})
export class ForestListComponent implements OnInit {
  current = 1;
  data: ForestListItem[] = [];
  isLoading = false;
  filter: ForestGetListRequest = {
    page: 1,
    limit: 10
  }

  constructor(
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.isLoading = true;
    this.store.dispatch(loadForestList(this.filter));
    this.store.select(selectForestList).subscribe(state => {
      this.data = state
    })
    this.isLoading = false
  }

  getDetail() {
    alert('working')
  }
}

