import { Component, OnInit } from '@angular/core';
import {Hardware} from "./hardware-model";
import {HardwareService} from "./hardware.service";
import {HardwareType} from "./hardware-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  hardwareList!: Hardware[];
  selectedHardware!: Hardware;
  typesOfHardware = Object.values(HardwareType).filter(x => typeof x === "string");


  constructor( private hardwareService: HardwareService,
               private router: Router) { }

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

  add(code: string, name: string, priceString: string, type: string, quantityAvailableString: string): void {
      code = code.trim();
      name = name.trim();
      let price = Number(priceString);
      let quantityAvailable = Number(quantityAvailableString);

    console.log(type)

    if (!code || ! name || !price || !type || !quantityAvailable) { return; }


    this.hardwareService.addHardware({code, name, price, type, quantityAvailable } as Hardware)
      .subscribe(hardware => {
        this.hardwareList.push(hardware)
      })
  }

  deleteHardware(hardwareDelete: Hardware) {
    this.hardwareList = this.hardwareList.filter(hardware => hardware !== hardwareDelete);
    this.hardwareService.deleteHardware(hardwareDelete)
      .subscribe(
        () => console.log("Hardware deleted")
      )
  }

  goToDetails(hardware: Hardware) {
    this.router.navigate([`detail/${hardware.code}`])
  }

  editHardware(hardware: Hardware) {
    this.router.navigate([`edit/${hardware.code}`])
  }

}
