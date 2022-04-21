import { Component, OnInit } from '@angular/core';
import {HardwareService} from "../hardware.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HardwareType} from "../hardware-type";

@Component({
  selector: 'app-hardware-edit',
  templateUrl: './hardware-edit.component.html',
  styleUrls: ['./hardware-edit.component.css']
})
export class HardwareEditComponent implements OnInit {

  typesOfHardware = Object.values(HardwareType).filter(x => typeof x === "string");


  hardwareEditForm = this.fb.group( {
    'code': new FormControl(''),
    'name': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required),
    'quantityAvailable': new FormControl('', Validators.required)
  });

  constructor(private hardwareService: HardwareService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    const  routeParams = this.route.snapshot.paramMap;
    const  hardwareIdFromRoute = String(routeParams.get('code'));

    console.log(hardwareIdFromRoute);

    this.hardwareService.getHardwareByCode(hardwareIdFromRoute)
      .subscribe(hardware => {
        console.log(hardware)

        this.hardwareEditForm = this.fb.group( {
          'code': new FormControl(hardware.code),
          'name': new FormControl(hardware.name, Validators.required),
          'price': new FormControl(hardware.price, Validators.required),
          'type': new FormControl(hardware.type, Validators.required),
          'quantityAvailable': new FormControl(hardware.quantityAvailable, Validators.required)
        });
      });
  }

  updateData() {
      console.log(this.hardwareEditForm.value)

    this.hardwareService.updateHardware(this.hardwareEditForm.value)
      .subscribe( result => {
        console.log(result);
      });
  }

}
