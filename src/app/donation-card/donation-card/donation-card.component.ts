import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-donation-card',
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.css']
})
export class DonationCardComponent implements OnInit, OnChanges {

  @Input() cardInput: any
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }
  

}
