import { Component, OnInit } from '@angular/core';
import {Review} from "./review-model";
import {ReviewService} from "./review.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewList!: Review[];
  selectedReview!: Review;

  constructor(
    private reviewService: ReviewService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews()
      .subscribe(reviewList => this.reviewList = reviewList)
  }

  getReviewsContainingText(text: string) {
    this.reviewService.getReviewsContainingText(text)
      .subscribe(reviewList => this.reviewList = reviewList);

  }

  goToDetails(review: Review) {
      this.router.navigate([`reviewDetail/${review.id}`])
  }
}
