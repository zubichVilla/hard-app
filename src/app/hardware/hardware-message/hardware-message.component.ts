import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hardware-message',
  templateUrl: './hardware-message.component.html',
  styleUrls: ['./hardware-message.component.css']
})
export class HardwareMessageComponent implements OnInit {

  @Input() hardwareName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
