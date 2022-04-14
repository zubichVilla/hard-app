import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hardware-price',
  templateUrl: './hardware-price.component.html',
  styleUrls: ['./hardware-price.component.css']
})
export class HardwarePriceComponent implements OnInit {

  @Input() price!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
