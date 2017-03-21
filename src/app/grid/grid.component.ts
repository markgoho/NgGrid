import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <div class="grid-item item-1">1</div>
    <div class="grid-item item-2">2</div>
    <div class="grid-item item-3">3</div>
    <div class="grid-item item-4">4</div>
    <div class="grid-item item-5">5</div>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 150px 300px;
      grid-gap: 1em;
    }

    .grid-item {
      border-radius: 0.25em;
      background-color: purple;
      color: white;
      font-family: arial;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-1 {

    }
  `]
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
