import {Component, Input, OnInit} from '@angular/core';
import {Hardware} from "../hardware-model";

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  @Input() hardware!: Hardware;

  constructor() { }

  ngOnInit(): void {
  }

}
