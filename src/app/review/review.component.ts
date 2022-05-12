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

  reviewsList!: Review[];

  constructor( private reviewService: ReviewService,
               private router: Router) { }

  ngOnInit(): void {

  }

  getReviewsWithText(text: string) {
    this.reviewService.getReviewsWithText(text)
      .subscribe(reviewsList => this.reviewsList = reviewsList);
  }

  goToDetails(review: Review) {
    this.router.navigate([`reviewDetails/${review.id}`])
  }
}
