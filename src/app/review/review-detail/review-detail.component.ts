import { Component, OnInit } from '@angular/core';
import {Review} from "../review-model";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../review.service";
import {HardwareService} from "../../hardware/hardware.service";
import {Hardware} from "../../hardware/hardware-model";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  review?: Review;
  hardwareCode?: string;
  hardware?: Hardware;

  constructor(private route:ActivatedRoute,
              private reviewService: ReviewService,
              private hardwareService: HardwareService) { }

  ngOnInit(): void {

    const  routeParams = this.route.snapshot.paramMap;
    const  reviewIdFromRoute = String(routeParams.get('id'));

    this.reviewService.getReviewById(reviewIdFromRoute)
      .subscribe(review => {

        this.review = review;
        this.hardwareCode = review.hardwareCode;


        console.log(JSON.stringify(review));

        this.hardwareService.getHardwareByCode(this.hardwareCode)
          .subscribe(hardware => this.hardware = hardware);

      }
      );
  }

}
