import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hardware-price',
  templateUrl: './hardware-price.component.html',
  styleUrls: ['./hardware-price.component.css']
})
export class HardwarePriceComponent implements OnInit {

  @Input() price?:number;

  constructor() { }

  ngOnInit(): void {
  }

  condition(price: number) {

    if(price < 100){
       return "Ovaj hardver se ne može kupiti na rate."
    }else if(price >= 100 && price < 400 ){
       return "Ovaj hardver se može kupiti na 6 rata."
    }else if(price >= 400 && price < 800){
       return "Ovaj hardver se može kupiti na 12 rata."
    }else{
      return "Ovaj hardver se može kupiti na 24 rate."
    }

  }
}
