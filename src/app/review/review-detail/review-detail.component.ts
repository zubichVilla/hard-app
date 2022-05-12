import { Component, OnInit } from '@angular/core';
import {Review} from "../review-model";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../review.service";
import {HardwareService} from "../../hardware/hardware.service";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  review?: Review;

  constructor(private route:ActivatedRoute,
              private reviewService: ReviewService,
              private hardwareService: HardwareService) { }

  ngOnInit(): void {

    const  routeParams = this.route.snapshot.paramMap;
    const  reviewIdFromRoute = String(routeParams.get('id'));

    this.reviewService.getReviewById(reviewIdFromRoute)
      .subscribe(review => this.review = review);
  }

}
