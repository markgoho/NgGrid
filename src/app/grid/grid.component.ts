import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <div class="grid-container" [ngStyle]="setStyles()">
      <div class="grid-item item-1">1</div>
      <div class="grid-item item-2">2</div>
      <div class="grid-item item-3">3</div>
      <div class="grid-item item-4">4</div>
      <div class="grid-item item-5">5</div>
      <div class="grid-item item-5">6</div>
      <div class="grid-item item-5">7</div>
      <div class="grid-item item-5">8</div>
      <div class="grid-item item-5">9</div>
      <div class="grid-item item-5">10</div>
    </div>

    <h1>Grid Settings</h1>
  `,
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  templateColumn = {
    qty: 3,
    unit: 'minmax(100px, 150px)'
  };

  templateRow = {
    qty: 4,
    unit: '250px'
  };

  setStyles() {
    let styles = {
      'grid-template-columns': `repeat(${this.templateColumn.qty}, ${this.templateColumn.unit}`,
      'grid-template-rows': `repeat(${this.templateRow.qty}, ${this.templateRow.unit}`
    };
    return styles;
  }

  constructor() { }

  ngOnInit() {
  }

}
