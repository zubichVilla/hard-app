import { Component, OnInit } from '@angular/core';
import {Hardware} from "./hardware-model";
import {HardwareService} from "./hardware.service";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  hardwareList!: Hardware[];
  selectedHardware!: Hardware;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.getHardware();
  }


  getHardware(): void {
    this.hardwareService.getHardware()
      .subscribe(hardwareList => this.hardwareList = hardwareList)
  }

  onSelect(hardware: Hardware): void {
    this.selectedHardware = hardware;
  }
}
