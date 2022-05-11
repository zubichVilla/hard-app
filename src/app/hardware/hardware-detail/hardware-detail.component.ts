import {Component, OnInit} from '@angular/core';
import {Hardware} from "../hardware-model";
import {ActivatedRoute} from "@angular/router";
import {HardwareService} from "../hardware.service";
import {Review} from "../../review/review-model";
import {ReviewService} from "../../review/review.service";

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  hardware?: Hardware;

  reviews?: Review[];

  constructor(private  route: ActivatedRoute,
              private hardwareService: HardwareService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {

    const  routeParams = this.route.snapshot.paramMap;
    const  hardwareIdFromRoute = String(routeParams.get('code'));

    this.hardwareService.getHardwareByCode(hardwareIdFromRoute)
      .subscribe(hardware => this.hardware = hardware);

    this.reviewService.getReviewsByHardwareCode(hardwareIdFromRoute)
      .subscribe(reviews => this.reviews = reviews);

  }

}
