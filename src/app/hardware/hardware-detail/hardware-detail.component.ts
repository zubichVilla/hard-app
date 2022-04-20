import {Component, OnInit} from '@angular/core';
import {Hardware} from "../hardware-model";
import {ActivatedRoute} from "@angular/router";
import {HardwareService} from "../hardware.service";

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  hardware?: Hardware;

  constructor(private  route: ActivatedRoute,
              private hardwareService: HardwareService) { }

  ngOnInit(): void {

    // First get the product id from the current route.
    const  routeParams = this.route.snapshot.paramMap;
    const  hardwareIdFromRoute = String(routeParams.get('code'));

    // Find the product that correspond with the id provided in route.
    this.hardware = this.hardwareService.getHardwareById(hardwareIdFromRoute)
  }

}
